const Sequelize = require("sequelize");
const sequelize = require("../database/config");
const Role = require("./Role");
const Permission = require("./Permission");

const RolePermissions = sequelize.define("role_permission", {
  id: {
    type: Sequelize.UUID,
    autoIncrement: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
});
RolePermissions.belongsTo(Role, { foreignKey: "roleId", targetKey: "id" });
RolePermissions.belongsTo(Permission, {
  foreignKey: "permissionId",
  targetKey: "id",
});
module.exports = RolePermissions;
