import Sequelize from "sequelize";

const comment = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) => {
  const Comment = sequelize.define("comment", {
    body: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    postId: {
      type: Sequelize.INTEGER,
    },
  });

  Comment.associate = (models: any) => {
    Comment.belongsTo(models.Post);
  };

  return Comment;
};

export default comment;
