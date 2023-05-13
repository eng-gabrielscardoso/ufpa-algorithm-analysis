import HttpClient from "src/service/HttpClient";

describe("HTTP Client tests", () => {
  /** @test */
  test("should instance correctly an HTTP Client", () => {
    const httpClient = new HttpClient();

    expect(httpClient).not.toBeNull();
  });
});
