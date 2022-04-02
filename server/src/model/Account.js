const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Account = sequelize.define('account', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNULL: false,
        primaryKey: true,        
    },
    username: {
        type: DataTypes.STRING,
        allowNULL: false,
        unique: true,

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNULL: true,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    facebook_id: {
        type: DataTypes.STRING,
        allowNULL: true,
    }
});
module.exports = Account;
