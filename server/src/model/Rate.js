const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const moment = require("moment-timezone");
const User = require("./User");

const Rate = sequelize.define(
  "rate",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNULL: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      unique: true,
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quality: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      defaultValue: 0,
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
// Rate.belongsTo(User, {
//   foreignKey: "user_id",
// });
// Rate.belongsTo(Service, {
//   foreignKey: "service_id",
// });
module.exports = Rate;
