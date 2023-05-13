import * as dotenv from "dotenv-safe";

dotenv.config();

export default {
  apiBaseUrl: process.env.API_BASE_URL,
};
