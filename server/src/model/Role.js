const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const Account = require("./Account");
const RoleAccounts = require("./RoleAccounts");
const Permission = require("./Permission");
const RolePermissions = require("./RolePermissions");
const Service = require("./Service");

const Role = sequelize.define("role", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  role_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
Role.hasOne(Service);
Role.belongsToMany(Account, { through: RoleAccounts });
Role.belongsToMany(Permission, { through: RolePermissions });
module.exports = Role;
