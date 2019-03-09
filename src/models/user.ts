import Sequelize from "sequelize";

const user = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) => {
  const User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
  });

  User.associate = (models: any) => {
    User.hasMany(models.Post);
  };

  return User;
};

export default user;
