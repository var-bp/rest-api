import Sequelize from "sequelize";

const post = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) => {
  const Post = sequelize.define("post", {
    body: {
      type: Sequelize.TEXT,
    },
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      unique: true,
    },
    title: {
      type: Sequelize.TEXT,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  });

  Post.associate = (models: any) => {
    Post.hasMany(models.Comment);
  };

  return Post;
};

export default post;
