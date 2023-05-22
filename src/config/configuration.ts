import * as dotenv from "dotenv-safe";

dotenv.config();

export default {
  appEnv: process.env.APP_ENV,
  apiBaseUrl: process.env.API_BASE_URL,
};
