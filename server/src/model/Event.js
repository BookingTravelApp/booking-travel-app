const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");

const Event = sequelize.define("event", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  event_name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  discount: {
    type: DataTypes.DECIMAL,
  },
  startAt: {
    type: DataTypes.DATE,
  },
  endAt: {
    type: DataTypes.DATE,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Event;
