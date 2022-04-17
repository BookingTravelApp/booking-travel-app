const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const Event = require('./Event');
const Service = require('./Service');

const Service_event = sequelize.define('service_event', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
}, { timestamps: false });

Service_event.belongsTo(Service, {foreignKey: 'serviceId', targetKey: 'id'});

module.exports = Service_event;

