const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const Service_event = require('./Service-event');

const Event = sequelize.define('event', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
    },
    event_name: {
        type: DataTypes.STRING,
    },
    discount: {
        type: DataTypes.DECIMAL,
    },
    end_at: {
        type: DataTypes.DATE
    }


}, { timestamps: false });

Event.belongsTo(Service_event, {foreignKey: 'eventId', targetKey: 'id'});
Service_event.hasOne(Event);

module.exports = Event;