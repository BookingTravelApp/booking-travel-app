const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const Service = require("../database/Service");

const Image = sequelize.define("image", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  service_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_avatar: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Image.belongsTo(Service, {
  foreignKey: "service_id",
});
module.exports = Image;
