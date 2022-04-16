const {DataTypes} = require("sequelize");
const sequelize = require("../database/config");
const RolePermissions = require("./RolePermissions");

const Permission = sequelize.define("permission",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    action:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true
    }
});
Permission.belongsToMany(Role, {through: "RolePermissions"});
module.exports = Role;
