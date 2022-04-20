const Sequelize = require("sequelize");
const sequelize = require("../database/config");
const Service = require("./Service");
const Event = require("./Event");

const ServiceEvents = sequelize.define("service_event", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
});
ServiceEvents.belongsTo(Service, { foreignKey: "serviceId", targetKey: "id" });
ServiceEvents.belongsTo(Event, { foreignKey: "eventId", targetKey: "id" });
module.exports = ServiceEvents;
