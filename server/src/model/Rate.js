const Sequelize = require("sequelize");
const sequelize = require("../database/config");

const Rate = sequelize.define(
  "rate",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNULL: false,
      primaryKey: true,
    },
    quality: {
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
module.exports = Rate;
