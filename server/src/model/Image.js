const Sequelize = require("sequelize");
const sequelize = require("../database/config");
const Service = require("./Service");

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
Image.belongsTo(Service, { foreignKey: "serviceId", targetKey: "id" });
module.exports = Image;
