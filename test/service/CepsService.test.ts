import HttpClient from 'src/service/HttpClient';
import CepsService from "src/service/CepsService";

describe("CepsService tests", () => {
  /** @test */
  test("should instance correctly a CEPs Service", () => {
    const response = new CepsService();

    expect(response).not.toBeNull();
  });

  /** @test */
  test("should return a 200 status code", async () => {
    const response = await CepsService.getCeps();

    expect(response.status).toBe(200);
  });

  /** @test */
  test("should return a valid JSON structure", async () => {
    const response = await CepsService.getCeps();

    expect(response).toBeDefined();

    expect(typeof response).toBe("object");
  });
});
