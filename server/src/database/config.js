const { Sequelize, DataTypes } = require("sequelize");
const { Account } = require("../model");
const models = require("../model");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

// ----- IMPORTANT -----
// If force = true, everytime the server runs we will lose the data for the table
// force = true recreates a table

sequelize.sync({ force: false, alter: true });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("database connect successfully");
  } catch (error) {
    console.log(error);
  }
})();

//
const baseModels = [
  "Account",
  "User",
  "Role",
  "Service",
  "Event",
  "Service_event",
  "Image",
];
const db = {};
//load model
baseModels.map((model) => {
  db[model] = models[model](sequelize, DataTypes);
});

//config associations
// @Account
db.Account.hasOne(db.User, {
  foreignKey: "accoundId",
  sourceKey: "id",
  onDelete: "cascade",
  onUpdate: "cascade",
});
db.Account.hasOne(db.Role, {
  foreignKey: "accoundId",
  sourceKey: "id",
});
// @User
db.User.belongsTo(db.Account, {
  foreignKey: "accountId",
  targetKey: "id",
});
// @Role
db.Role.belongsTo(db.Account, {
  foreignKey: "accountId",
  targetKey: "id",
});
// @Service
db.Service.hasOne(db.Service_event, {
  foreignKey: "serviceId",
  sourceKey: "id",
});
// @Service_event
db.Service_event.belongsTo(db.Service, {
  foreignKey: "serviceId",
  targetKey: "id",
});
// @Event
db.Event.hasMany(db.Service_event, {
  foreignKey: "eventId",
  sourceKey: "id",
});

module.exports = db;
