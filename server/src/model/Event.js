const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");

const Event = sequelize.define("event", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
  },
  event_name: {
    type: DataTypes.STRING,
  },
  discount: {
    type: DataTypes.DECIMAL,
  },
  end_at: {
    type: DataTypes.DATE,
  },
});

module.exports = Event;
