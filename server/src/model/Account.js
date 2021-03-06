module.exports = (sequelize, DataTypes) =>
  sequelize.define("account", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNULL: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNULL: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNULL: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    facebook_id: {
      type: DataTypes.STRING,
      allowNULL: true,
    },
    avatar: {
      type: DataTypes.TEXT,
    },
  });
