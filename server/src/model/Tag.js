const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");

const Tag = sequelize.define("tag", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  tag_name: {
    type: DataTypes.DATE,
    allownull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Tag;
