module.exports = (sequelize, DataTypes) => (
    sequelize.define('service_event', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
    }, { timestamps: false })
);