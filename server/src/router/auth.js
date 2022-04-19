const express = require('express');
const router = express.Router();
const argon2= require('argon2');
const jwt = require('jsonwebtoken');
const validator = require('../middleware/validator');
const { validationResult } = require('express-validator');
const { Account, User, Role } = require('../model');
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
    const existingUsername = await Account.findOne({ where:{ username } });
    const existingEmail = await Account.findOne( {where: { email } });
    if(existingUsername || existingEmail) {
      return res.status(400).json({
        success: false,
        message: 'username and/or email already taken'
      });
    }
    //hash password
    const hashPassword = await argon2.hash(password);

    const newAccount = new Account({ username, email,password: hashPassword });
    await newAccount.save();

    //return token
    const accessToken = jwt.sign({userId: newAccount._id}, process.env.DB_ACCESS_TOKEN_SECRET);
    
    console.log('@@@@@@@', );
    //create instance Role and User table
    try {
      let userId = newAccount.getDataValue('id');
      await User.create({
        accountId: userId
      });

      await Role.create({
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
    const user = await Account.findOne({ where: { username }});
    if(!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      }); 
    }
    //user found
    const passwordValid = await argon2.verify(user.password, password);
    if(!passwordValid){
      return res.status(400).json({
        success: false,
        message: 'Password not valid',
      });
    }

    const accessToken = jwt.sign({userId: user._id},  process.env.DB_ACCESS_TOKEN_SECRET);
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
module.exports = router;
