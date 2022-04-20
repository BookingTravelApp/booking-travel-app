const Sequelize = require("sequelize");
const sequelize = require("../database/config");
const Bill = require("./Bill");
const Service = require("./Service");

const Cart = sequelize.define(
  "cart",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNULL: false,
      primaryKey: true,
    },
    amount: {
      type: Sequelize.INTEGER,
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

BillDetail.belongsTo(Bill, { foreignKey: "billId", targetKey: "id" });
BillDetail.belongsTo(Service, { foreignKey: "serviceId", targetKey: "id" });

module.exports = Cart;
