module.exports = (sequelize, DataTypes) => (
    sequelize.define('service', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        service_name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        role_service_id: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.STRING,
        },
        
    }, { timestamps: false })
);