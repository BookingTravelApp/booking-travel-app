const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const Service = require("./Service");
const Event = require("./Event");

const ServiceEvents = sequelize.define("service_event", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  service_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Service,
      key: "id",
    },
  },
  Event: {
    type: DataTypes.INTEGER,
    references: {
      model: Event,
      key: "id",
    },
  },
});
module.exports = ServiceEvents;
