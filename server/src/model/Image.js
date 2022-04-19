const Sequelize = require("sequelize");
const sequelize = require("../database/config");

const Image = sequelize.define("image", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
  },
  is_avatar: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  path: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Image;
