import HeapSort from "src/core/HeapSort";

describe("HeapSort tests", () => {
  /** @test */
  test("should instance a HeapSort correctly", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const hs = new HeapSort(numbers);

    expect(hs).not.toBeNull();
  });
});
