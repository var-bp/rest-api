// tslint:disable:no-console
// tslint:disable:max-line-length

// https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8
// https://www.robinwieruch.de/postgres-express-setup-tutorial/
// https://vivacitylabs.com/setup-typescript-sequelize/
// https://hackernoon.com/the-practical-guide-for-building-rest-api-in-nodejs-and-mongodb-include-passport-and-jwt-476720b70da0

import bodyParser from "body-parser";
import compression from "compression";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import createError from "http-errors";
import morgan from "morgan";
import config from "./config/default";
import routes from "./routes";
// import models, { sequelize } from "./models";

dotenv.config();

const app: express.Application = express();
const port: string | number = config.PORT;
const host: string = config.HOST;

if (config.IS_PROD) {
  app.use(compression());
  app.use(helmet());
}
if (config.IS_DEV) {
  app.use(morgan("dev"));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  next(createError(404));
});

// error handler
// no stacktraces leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500).json({ status: err.status, message: err.message });
});

// sequelize
//   .sync()
//   .then(() => {
app.listen({ port, host }, (err: any) => {
  if (err) {
    console.error(err);
  }
  if (config.IS_DEV) {
    console.info(`Server is running at http://${host}:${port}`);
  }
});
  // })
  // .catch((err: any) => { console.error(err); });
