const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require("./User");

const Cart = sequelize.define('cart', {
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
    cartable_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cartable_type: {
        type: DataTypes.STRING,
        allowNULL: true,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNULL: false,
        defaultValue: 0
    }
});
Cart.belongsTo(User,{
    foreignKey: "user_id"
});
Cart.belongsTo(Tour, {foreignKey:"cartable_id",constraints:false});
Cart.belongsTo(Service, {foreignKey:"cartable_id", constraints:false});
Cart.getCartable=(options) => {
    if (!this.cartable_type) return Promise.resolve(null);
    const mixinMethodName = `get${uppercaseFirst(this.cartable_type)}`;
    return this[mixinMethodName](options);
}
Cart.addHook("afterFind", findResult => {
    if (!Array.isArray(findResult)) findResult = [findResult];
    for (const instance of findResult) {
      if (instance.cartable_type === "tour" && instance.tour !== undefined) {
        instance.cartable = instance.tour;
      } else if (instance.cartable_type === "service" && instance.service !== undefined) {
        instance.cartable = instance.service;
      }
      // To prevent mistakes:
      delete instance.tour;
      delete instance.dataValues.tour;
      delete instance.service;
      delete instance.dataValues.service;
    }
  });
module.exports = Cart;
