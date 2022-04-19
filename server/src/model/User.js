const Sequelize = require("sequelize");
const sequelize = require("../database/config");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    gender: {
      type: Sequelize.ENUM("male", "female", "undefined"),
      allowNull: true,
    },
    data_of_birth: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  { timestamps: false }
);

module.exports = User;
