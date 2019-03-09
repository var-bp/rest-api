import Sequelize from "sequelize";

const address = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) => {
  const Address = sequelize.define("address", {
    city: {
      type: DataTypes.STRING,
    },
    geo: {
      type: DataTypes.GEOMETRY("POINT"),
    },
    street: {
      type: DataTypes.STRING,
    },
    suite: {
      type: DataTypes.STRING,
    },
    zipcode: {
      type: DataTypes.STRING,
    },
  });

  Address.associate = (models: any) => {
    Address.belongsTo(models.User);
  };

  return Address;
};

export default address;
