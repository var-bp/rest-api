import Sequelize from "sequelize";
import defaultConfig from "../config/default";

interface IModels {
  [key: string]: any;
}

// http://docs.sequelizejs.com/manual/tutorial/associations.html
// http://docs.sequelizejs.com/manual/tutorial/models-definition.html#validations

const sequelize = new Sequelize(
  defaultConfig.DATABASE_NAME,
  defaultConfig.DATABASE_USER,
  defaultConfig.DATABASE_PASSWORD,
  Object.assign(
  {},
  {
    dialect: "postgres",
    host: defaultConfig.HOST,
    operatorsAliases: false,
    port: +defaultConfig.DATABASE_PORT,
  },
  defaultConfig.IS_DEV ? {} : { logging: false },
  ),
);

const models: IModels = {
  Address: sequelize.import("./address"),
  Comment: sequelize.import("./comment"),
  Company: sequelize.import("./company"),
  Post: sequelize.import("./post"),
  User: sequelize.import("./user"),
};

Object.keys(models).forEach((key: any) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
