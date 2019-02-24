import Sequelize from "sequelize";

const user = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  return User;
};

export default user;
