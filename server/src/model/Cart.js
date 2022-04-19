const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const User = require("./User");
const Service = require("./Service");

const Cart = sequelize.define(
  "cart",
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
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNULL: false,
    },
    amount: {
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
// Cart.belongsTo(User, {
//   foreignKey: "user_id",
// });
// Cart.belongsTo(Service, {
//   foreignKey: "service_id",
// });
module.exports = Cart;
