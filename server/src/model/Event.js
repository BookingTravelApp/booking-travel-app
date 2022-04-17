const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const Service = require("./Service");
const ServiceEvents = require("./ServiceEvents");

const Event = sequelize.define(
  "event",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    discount: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    endAt: {
      type: DataType.DATE,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updatedAt: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
      allowNull: false,
    },
  },
  { timestamps: false }
);
Event.belongsToMany(Service, { through: ServiceEvents });
module.exports = Service;
