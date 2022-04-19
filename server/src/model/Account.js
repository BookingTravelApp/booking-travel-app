const Sequelize = require("sequelize");
const sequelize = require("../database/config");
const User = require("./User");
const Role = require("./Role");
const Account = sequelize.define("account", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNULL: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNULL: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNULL: true,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  facebook_id: {
    type: Sequelize.STRING,
    allowNULL: true,
  },
});

Account.hasOne(User, {foreignKey: 'accoundId', sourceKey: 'id'});
Account.hasOne(Role, {foreignKey: 'accoundId', sourceKey: 'id'});

module.exports = Account;
