import Service from "src/service/Service";

describe("Service tests", () => {
  /** @test */
  test("should correctly instance a service", () => {
    const service = new Service();

    expect(service).not.toBeNull();
  });
});
