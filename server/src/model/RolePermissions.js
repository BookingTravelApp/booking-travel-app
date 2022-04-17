const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const Role = require("./Role");
const Permission = require("./Permission");

const RolePermissions = sequelize.define("role_permission", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  role_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
      key: "id",
    },
  },
  permission_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Permission,
      key: "id",
    },
  },
});
module.exports = RolePermissions;
