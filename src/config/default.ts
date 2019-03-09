interface IConfig {
  DATABASE_USER: string;
  HOST: string;
  DATABASE_NAME: string;
  DATABASE_PASSWORD: string;
  PORT: number | string;
  DATABASE_PORT: number | string;
  IS_DEV: boolean;
  IS_PROD: boolean;
  IS_TEST: boolean;
}

const config: IConfig = {
  DATABASE_NAME: process.env.DATABASE_NAME || "api_dev",
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "password",
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  DATABASE_USER: process.env.DATABASE_USER || "guest",
  HOST: process.env.HOST || "localhost",
  IS_DEV: process.env.NODE_ENV === "development",
  IS_PROD: process.env.NODE_ENV === "production",
  IS_TEST: process.env.NODE_ENV === "test",
  PORT: process.env.PORT || 5000,
};

export default config;
