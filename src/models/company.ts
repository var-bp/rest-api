import Sequelize from "sequelize";

const company = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) => {
  const Company = sequelize.define("company", {
    bs: {
      type: DataTypes.STRING,
    },
    catchPhrase: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
  });

  Company.associate = (models: any) => {
    Company.belongsTo(models.User);
  };

  return Company;
};

export default company;
