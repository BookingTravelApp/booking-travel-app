<<<<<<< HEAD
const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const User = require("./User");
const Role = require("./Role");
const RoleAccounts = require("RoleAccounts");

const Account = sequelize.define(
  "account",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNULL: false,
      primaryKey: true,
=======
const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require('./User');
const Role = require('./Role');
const Account = sequelize.define('account', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNULL: false,
        primaryKey: true,        
>>>>>>> dev-backend
    },
    username: {
      type: DataTypes.STRING,
      allowNULL: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNULL: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    facebook_id: {
        type: DataTypes.STRING,
        allowNULL: true,
    }
});

Account.hasOne(User);
Account.hasOne(Role);

module.exports = Account;
