module.exports = (sequelize, DataTypes) => {
    sequelize.define('image', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNULL: false,
            primaryKey: true,
        },
        service_id: {
            type: DataTypes.TEXT,
        },
        is_avatar: {
            type: DataTypes.BOOLEAN,
        },
        path: {
            type: DataTypes.TEXT,
            allowNULL: false,
        }
    });
};