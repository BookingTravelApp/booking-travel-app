const {DataTypes} = require("sequelize");
const sequelize = require("../database/config");
const BillDetail = require("./BillDetail");

const Bill = sequelize.define("bill",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    manager_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: Date.now().toString()
    },
    total_amount:{
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue:0
    }
});
Bill.hasMany(BillDetail);
Bill.belongsTo(User, {
    foreignKey: user_id
});
module.exports = Bill;