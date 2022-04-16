const {DataTypes} = require("sequelize");
const sequelize = require("../database/config");

const BillDetail = sequelize.define("billDetail", {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    bill_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    service_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true
    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0
    }
});

module.exports = BillDetail;