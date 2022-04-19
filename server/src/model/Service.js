const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const Role = require("./Role");
const Rate = require("./Rate");
const ServiceEvents = require("./ServiceEvents");

const Service = sequelize.define(
  "service",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    service_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    role_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
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
// Service.belongsTo(Role, {
//   foreignKey: "role_id",
// });
// Service.belongsToMany(Event, { through: ServiceEvents });
// Service.hasMany(BillDetail);
// Service.hasMany(Rate);
module.exports = Service;
