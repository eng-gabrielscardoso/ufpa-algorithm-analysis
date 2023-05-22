import BucketSort from "src/core/BucketSort";

describe("BucketSort tests", () => {
  /** @test */
  test("should instance a BucketSort correctly", async () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const bs = new BucketSort(numbers, 1);

    expect(bs).not.toBeNull();
  });
});
