const Sequelize = require("sequelize");
const sequelize = require("../database/config");

const Bill = sequelize.define(
  "bill",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    total_amount: {
      type: Sequelize.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
  },
  { timestamps: true }
);

module.exports = Bill;
