import CepsService from "src/service/CepsService";

describe("CepsService tests", () => {
  /** @test */
  test("should instance correctly a CEPs Service", () => {
    const cepsService = new CepsService();

    expect(cepsService).not.toBeNull();
  });

  test("should return a 200 status code", () => {});

  test("should return a valid JSON structure", () => {});

  test("should return a valid response", () => {});
});
