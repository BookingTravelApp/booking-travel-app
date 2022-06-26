module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        // eslint-disable-next-line quotes
        type: DataTypes.ENUM("male", "female", "undefined"),
        allowNull: true,
      },
      data_of_birth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
