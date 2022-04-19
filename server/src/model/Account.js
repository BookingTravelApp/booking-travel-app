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
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    createdAt: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updatedAt: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
      allowNull: false,
    },
  },
  { timestamps: false }
);
// Account.hasOne(User);
// Account.belongsToMany(Role, { through: "RoleAccounts" });
module.exports = Account;
