import * as dotenv from "dotenv-safe";
import configuration from "src/config/configuration";

dotenv.config();

describe("Configuration file tests", () => {
  /** @test */
  test("should load correctly api base url", () => {
    const apiBaseUrl = process.env.API_BASE_URL;
    expect(configuration.apiBaseUrl).toEqual(apiBaseUrl);
  });
});
