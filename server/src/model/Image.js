const {DataTypes, INTEGER} = require("sequelize");
const sequelize = require("../database/config");
const Tour = require("../database/Tour");
const Service = require("../database/Service");
const User = require("../database/User");

const Image = sequelize.define("image", {
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    imageable_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imageable_type:{
        type: DataTypes.STRING,
        allowNull: false
    },
    path:{ 
        type: DataTypes.STRING,
        allowNull: false
    }
});
Image.belongsTo(User, {foreignKey:"imageable_id", constraints:false});
Image.belongsTo(Tour, {foreignKey:"imageable_id", constraints:false});
Image.belongsTo(Service, {foreignKey:"imageable_id", constraints:false});
Image.getImageable=(options) => {
    if (!this.imageable_type) return Promise.resolve(null);
    const mixinMethodName = `get${uppercaseFirst(this.imageable_type)}`;
    return this[mixinMethodName](options);
}
Image.addHook("afterFind", findResult => {
    if (!Array.isArray(findResult)) findResult = [findResult];
    for (const instance of findResult) {
        if (instance.imageable_type === "tour" && instance.tour !== undefined) {
            instance.imageable = instance.tour;
        } else if (instance.imageable_type === "service" && instance.service !== undefined) {
            instance.imageable = instance.service;
        }
        // To prevent mistakes:
        delete instance.tour;
        delete instance.dataValues.tour;
        delete instance.service;
        delete instance.dataValues.service;
    }
});
module.exports = Image;