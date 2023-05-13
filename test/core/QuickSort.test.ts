import QuickSort from "src/core/QuickSort";

describe("QuickSort tests", () => {
  /** @test */
  test("should instance a QuickSort correctly", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const qs = new QuickSort(numbers);

    expect(qs).not.toBeNull();
  });
});
