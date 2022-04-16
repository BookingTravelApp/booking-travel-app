const {DataTypes} = require("sequelize");
const sequelize = require("../database/config");
const Role = require("./Role");

const Service = sequelize.define("service", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    service_name:{
        type: DataTypes.STRING,
        allowNull:true
    },
    description:{
        type: DataTypes.TEXT,
        allowNull:true
    },
    role_id:{
        type: Datatypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull:true
    }
});
Service.belongsTo(Role,{
    foreignKey: "role_id"
});
Service.hasMany(BillDetail);
module.exports = Service;