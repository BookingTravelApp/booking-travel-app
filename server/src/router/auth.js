const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const validator = require("../middleware/validator");
const role = require("../middleware/role");
const verifyToken = require("../middleware/verify-token");
const { validationResult } = require("express-validator");
const { Account, User, Role, RoleAccounts } = require("../model");

router.get("/", [verifyToken, role.adminRole], async (req, res) => {
  try {
    const listUser = await User.findAll({
      attributes: {
        exclude: [],
      },
      // raw: true,
      include: [
        {
          model: Account,
          attributes: {
            exclude: ["password"],
          },
          include: [{ model: RoleAccounts, include: Role }],
        },
      ],
    });
    // const id = listUser.getDataValue("id");
    // console.log(listUser[0]["account"]["role_accounts"][0]["role"]["role"]);
    res.json({ success: true, listUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @router POST /register
// @public access

router.post("/register", validator.register(), async (req, res) => {
  const error = validationResult(req);
  const { username, email, password, listRole } = req.body;

  if (!error.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: error.array(),
    });
  }

  try {
    const existingUsername = await Account.findOne({ where: { username } });
    const existingEmail = await Account.findOne({ where: { email } });
    if (existingUsername || existingEmail) {
      return res.status(400).json({
        success: false,
        message: "username and/or email already taken",
      });
    }
    //hash password
    const hashPassword = await argon2.hash(password);

    const newAccount = new Account({ username, email, password: hashPassword });
    await newAccount.save();

    // arrayRole = JSON.parse(listRole);
    let roleTemp;
    for (i = 0; i < listRole.length; i++) {
      roleTemp = await Role.findOne({ where: { role: listRole[i] } });
      await RoleAccounts.create({
        roleId: roleTemp.id,
        accountId: newAccount.getDataValue("id"),
      });
    }

    //return token
    const accessToken = jwt.sign(
      { userId: newAccount._id },
      process.env.DB_ACCESS_TOKEN_SECRET
    );

    //create instance Role and User table
    try {
      let userId = newAccount.getDataValue("id");
      await User.create({
        accountId: userId,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Create user fail",
      });
    }
    return res.json({
      success: true,
      message: "User created successfully",
      token: accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// @router POST /login
// @access public

router.post("/login", async (req, res) => {
  const error = validationResult(req);
  const { username, password } = req.body;

  if (!error.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: error.array(),
    });
  }

  try {
    const user = await Account.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res.status(400).json({
        success: false,
        message: "Password not valid",
      });
    }

    const userId = user.getDataValue("id");
    const accessToken = generateToken({ id: userId, username: username });
    return res.json({
      success: true,
      message: "Login successful",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Interval server error",
    });
  }
});

//util
const generateToken = (payload) => {
  const { id, username } = payload;

  const accessToken = jwt.sign(
    { id, username },
    process.env.DB_ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1h",
    }
  );

  const refreshToken = jwt.sign(
    { id, username },
    process.env.DB_ACCESS_TOKEN_SECRET,
    {
      expiresIn: "10s",
    }
  );

  return { accessToken, refreshToken };
};
module.exports = router;
