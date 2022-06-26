module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "role",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      role: {
        type: DataTypes.STRING,
        // eslint-disable-next-line quotes
        defaultValue: "user",
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
