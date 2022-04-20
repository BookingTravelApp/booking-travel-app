const Account = require("./Account");
const Bill = require("./Bill");
const BillDetail = require("./BillDetail");
const Cart = require("./Cart");
const Event = require("./Event");
const Image = require("./Image");
const Permission = require("./Permission");
const Rate = require("./Rate");
const Role = require("./Role");
const RoleAccounts = require("./RoleAccounts");
const RolePermissions = require("./RolePermissions");
const Service = require("./Service");
const ServiceEvents = require("./ServiceEvents");
const User = require("./User");

User.belongsTo(Account, { foreignKey: "accountId", targetKey: "id" });

Bill.belongsTo(User, { foreignKey: "UserId", targetKey: "id" });

BillDetail.belongsTo(Bill, { foreignKey: "billId", targetKey: "id" });
BillDetail.belongsTo(Service, { foreignKey: "serviceId", targetKey: "id" });

Cart.belongsTo(Bill, { foreignKey: "billId", targetKey: "id" });
Cart.belongsTo(Service, { foreignKey: "serviceId", targetKey: "id" });

Image.belongsTo(Service, { foreignKey: "serviceId", targetKey: "id" });

Rate.belongsTo(User, { foreignKey: "userId", targetKey: "id" });
Rate.belongsTo(Service, { foreignKey: "serviceId", targetKey: "id" });

RoleAccounts.belongsTo(Role, { foreignKey: "roleId", targetKey: "id" });
RoleAccounts.belongsTo(Account, { foreignKey: "accountId", targetKey: "id" });

RolePermissions.belongsTo(Role, { foreignKey: "roleId", targetKey: "id" });
RolePermissions.belongsTo(Permission, {
  foreignKey: "permissionId",
  targetKey: "id",
});

ServiceEvents.belongsTo(Service, { foreignKey: "serviceId", targetKey: "id" });
ServiceEvents.belongsTo(Event, { foreignKey: "eventId", targetKey: "id" });
