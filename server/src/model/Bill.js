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
      type: Sequelize.NOW,
    },
    total_amount: {
      type: Sequelize.DOUBLE,
      allowNull: true,
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

Bill.belongsTo(User, { foreignKey: "UserId", targetKey: "id" });

module.exports = Bill;
