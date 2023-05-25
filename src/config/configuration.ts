import * as dotenv from "dotenv-safe";

dotenv.config();

interface IConfig {
  appEnv: "local" | "test"
  apiBaseUrl: string
}

export default {
  appEnv: process.env.APP_ENV,
  apiBaseUrl: process.env.API_BASE_URL,
} as IConfig;
