const {DataTypes} = require("sequelize");
const sequelize = require("../database/config");

const Tour = sequelize.define("tour", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tour_name:{
        type: DataTypes.STRING,
        allowNull: true
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true,
    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull: true
    }
});


module.exports = Tour;