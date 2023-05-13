import RadixSort from "src/core/RadixSort";

describe("RadixSort tests", () => {
  /** @test */
  test("should instance a RadixSort correctly", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const rs = new RadixSort(numbers);

    expect(rs).not.toBeNull();
  });
});
