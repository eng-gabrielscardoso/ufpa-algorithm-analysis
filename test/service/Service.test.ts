import Service from "src/service/Service";

describe("Service tests", () => {
  /** @test */
  test("should correctly instance a service", async () => {
    const service = new Service();

    expect(service).not.toBeNull();
  });
});
