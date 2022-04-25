const express = require('express');
const router = express.Router();
const argon2= require('argon2');
const jwt = require('jsonwebtoken');
const validator = require('../middleware/validator');
const { validationResult } = require('express-validator');
const db = require('../database/config');
const { where } = require('sequelize');

// @router POST /register
// @public access

router.post('/register', validator.register() ,async(req, res) => {
  const error = validationResult(req);
  const {username, email, password} = req.body;

  if(!error.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: error.array(),
    });
  }

  try {
    const existingUsername = await db.Account.findOne({ where:{ username } });
    const existingEmail = await db.Account.findOne( {where: { email } });
    if(existingUsername || existingEmail) {
      return res.status(400).json({
        success: false,
        message: 'username and/or email already taken'
      });
    }
    //hash password
    const hashPassword = await argon2.hash(password);

    const newAccount = new db.Account({ username, email,password: hashPassword });
    await newAccount.save();

    //return token
    const accessToken = jwt.sign({userId: newAccount._id}, process.env.DB_ACCESS_TOKEN_SECRET);
    
    //create instance Role and User table
    try {
      let userId = newAccount.getDataValue('id');
      await db.User.create({
        accountId: userId
      });

      await db.Role.create({
        accountId: userId
      });

    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Create user and role fail'
      });
    }
    return res.json({
      success: true,
      message: 'User created successfully',
      token: accessToken
    });

  }catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// @router POST /login
// @access public

router.post('/login', async(req, res) => {
  const error = validationResult(req);
  const { username, password } = req.body;

  if(!error.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: error.array()
    });
  }

  try {
    const user = await db.Account.findOne({ where: { username }});
    if(!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      }); 
    }

    const passwordValid = await argon2.verify(user.password, password);
    if(!passwordValid){
      return res.status(400).json({
        success: false,
        message: 'Password not valid',
      });
    }
    
    const userId = user.getDataValue('id');
    const accessToken = generateToken({id: userId, username: username})['accessToken'
  ];
    return res.json({
      success: true,
      message: 'Login successful',
      accessToken,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Interval server error',
    });
  }
});

//util
const generateToken = (payload) => {
  const { id, username } = payload;

  const accessToken = jwt.sign(
    {id, username},
    process.env.DB_ACCESS_TOKEN_SECRET,
    {
      expiresIn: '2m'
    }
  );

  const refreshToken = jwt.sign(
    { id, username },
    process.env.DB_ACCESS_TOKEN_SECRET,
    {
      expiresIn: '2m',
    }
  );

  return { accessToken, refreshToken};
};
module.exports = router;
