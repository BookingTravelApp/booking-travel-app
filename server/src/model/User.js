const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const Account = require("./Account");
const Cart = require('./Cart');
const Rate = require("./Rate");

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNULL: false,
        primaryKey: true,        
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNULL: false,
        unique: true,

    },
    gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.STRING,
        allowNULL: true,
        defaultValue: Date.now().toString(),
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNULL: false,
        defaultValue: true
    },
    account_id: {
        type: DataTypes.INTEGER,
        allowNULL: false,
    }
});
User.belongsTo(Account,{
    foreignKey:"account_id"
});
User.hasMany(Rate);
User.hasOne(Cart);
module.exports = User;
