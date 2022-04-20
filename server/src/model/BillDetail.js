const Sequelize = require("sequelize");
const sequelize = require("../database/config");
const Bill = require("./Bill");
const Service = require("./Service");

const BillDetail = sequelize.define("billDetail", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: true,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: true,
    defaultValue: 0,
  },
});

BillDetail.belongsTo(Bill, { foreignKey: "billId", targetKey: "id" });
BillDetail.belongsTo(Service, { foreignKey: "serviceId", targetKey: "id" });

module.exports = BillDetail;
