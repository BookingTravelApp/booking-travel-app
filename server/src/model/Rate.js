const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require("./User");

const Rate = sequelize.define('rate', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNULL: false,
        primaryKey: true,        
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNULL: false,
        unique: true,

    },
    rateable_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rateable_type: {
        type: DataTypes.STRING,
        allowNULL: true,
    },
    quality: {
        type: DataTypes.INTEGER,
        allowNULL: false,
        defaultValue: 0
    },
    date: {
        type: DataTypes.STRING,
        allowNULL: false,
        defaultValue: Date.now().toString()
    }
});
Rate.belongsTo(User,{
    foreignKey: "user_id"
});
Rate.belongsTo(Tour, {foreignKey:"rateable_id",constraints:false});
Rate.belongsTo(Service, {foreignKey:"rateable_id", constraints:false});
Rate.getRateable=(options) => {
    if (!this.rateable_type) return Promise.resolve(null);
    const mixinMethodName = `get${uppercaseFirst(this.rateable_type)}`;
    return this[mixinMethodName](options);
}
Rate.addHook("afterFind", findResult => {
    if (!Array.isArray(findResult)) findResult = [findResult];
    for (const instance of findResult) {
        if (instance.rateable_type === "tour" && instance.tour !== undefined) {
            instance.rateable = instance.tour;
        } else if (instance.rateable_type === "service" && instance.service !== undefined) {
            instance.rateable = instance.service;
        }
        // To prevent mistakes:
        delete instance.tour;
        delete instance.dataValues.tour;
        delete instance.service;
        delete instance.dataValues.service;
    }
});
module.exports = Rate;
