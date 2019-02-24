import Sequelize from "sequelize";
import defaultConfig from "../config/default";

interface IModels {
  [key: string]: any;
}

const sequelize = new Sequelize(
  defaultConfig.DATABASE_NAME,
  defaultConfig.DATABASE_USER,
  defaultConfig.DATABASE_PASSWORD,
  {
    dialect: "postgres",
  },
);

const models: IModels = {
  User: sequelize.import("./user"),
};

Object.keys(models).forEach((key: any) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
