// const Account = require("./Account");
// const Bill = require("./Bill");
// const BillDetail = require("./BillDetail");
// const Cart = require("./Cart");
// const Event = require("./Event");
// const Image = require("./Image");
// const Permission = require("./Permission");
// const Rate = require("./Rate");
// const Role = require("./Role");
// const RoleAccounts = require("./RoleAccounts");
// const RolePermissions = require("./RolePermissions");
// const Service = require("./Service");
// const ServiceEvents = require("./ServiceEvents");
// const User = require("./User");

// Account.hasOne(User);
// Account.belongsToMany(Role, { through: "RoleAccounts" });

// Bill.hasMany(BillDetail);
// Bill.belongsTo(User, {
//   foreignKey: user_id,
// });

// BillDetail.belongsTo(Bill, { foreignKey: "bill_id" });
// BillDetail.belongsTo(Service, { foreignKey: "service_id" });

// Cart.belongsTo(User, {
//   foreignKey: "user_id",
// });
// Cart.belongsTo(Service, {
//   foreignKey: "service_id",
// });

// Event.belongsToMany(Service, { through: ServiceEvents });

// Permission.belongsToMany(Role, { through: RolePermissions });

// Rate.belongsTo(User, {
//   foreignKey: "user_id",
// });
// Rate.belongsTo(Service, {
//   foreignKey: "service_id",
// });

// Role.hasOne(Service);
// Role.belongsToMany(Account, { through: RoleAccounts });
// Role.belongsToMany(Permission, { through: RolePermissions });

// Service.belongsTo(Role, {
//   foreignKey: "role_id",
// });
// Service.belongsToMany(Event, { through: ServiceEvents });
// Service.hasMany(BillDetail);
// Service.hasMany(Rate);

// User.belongsTo(Account, {
//   foreignKey: "account_id",
// });
// User.hasMany(Rate);
// User.hasOne(Cart);
