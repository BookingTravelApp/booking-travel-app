const Sequelize = require("sequelize");
const sequelize = require("../database/config");
const Role = require("./Role");
const Account = require("./Account");

const RoleAccounts = sequelize.define("role_account", {
  id: {
    type: Sequelize.UUID,
    autoIncrement: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
});
RoleAccounts.belongsTo(Role, { foreignKey: "roleId", targetKey: "id" });
RoleAccounts.belongsTo(Account, { foreignKey: "accountId", targetKey: "id" });
module.exports = RoleAccounts;
