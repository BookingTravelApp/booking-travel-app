const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const BillDetail = require("./BillDetail");

const Bill = sequelize.define(
  "bill",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    date: {
      type: DataTypes.NOW,
    },
    total_amount: {
      type: DataTypes.DOUBLE,
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
// Bill.hasMany(BillDetail);
// Bill.belongsTo(User, {
//   foreignKey: user_id,
// });
module.exports = Bill;
