const {DataTypes} = require("sequelize");
const sequelize = require("../database/config");
const Account = require("./Account");
const Role = require('./Role');

const RoleAccounts = sequelize.define("roleAccounts",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    account_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Account,
            key: "id"
        }
    },
    role_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Role,
            key: "id"
        }
    }
});
module.exports = RoleAccounts;