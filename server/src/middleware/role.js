const jwt = require("jsonwebtoken");
const { User, Account, Role, RoleAccounts } = require("../model");

let role = {};

var adminRole = async (req, res, next) => {
  try {
    if (req.userId) {
      const user = await Account.findOne({
        where: { id: req.userId },
        include: [{ model: RoleAccounts, include: [Role] }],
      });
      user["role_accounts"].forEach((element) => {
        if (element["role"]["role"] == "admin") {
          next();
        }
      });
    }
    // res.status(404).json({ success: false, message: "Not found" });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      success: false,
      message: "Internal server error",
    });
  }
};

var employeeRole = async (req, res, next) => {
  try {
    const user = await Account.findOne({
      where: { id: req.userId },
      include: [{ model: RoleAccounts, include: [Role] }],
    });
    user["role_accounts"].forEach((element) => {
      if (element["role"]["role"] == "employee") {
        next();
      }
    });
    // res.status(404).json({ success: false, message: "Not found" });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      success: false,
      message: "Internal server error",
    });
  }
};

var userRole = async (req, res, next) => {
  try {
    const user = await Account.findOne({
      where: { id: req.userId },
      include: [{ model: RoleAccounts, include: [Role] }],
    });
    user["role_accounts"].forEach((element) => {
      if (element["role"]["role"] == "user") {
        next();
      }
    });
    // res.status(404).json({ success: false, message: "Not found" });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      success: false,
      message: "Internal server error",
    });
  }
};

role = {
  adminRole,
  employeeRole,
  userRole,
};
module.exports = role;
