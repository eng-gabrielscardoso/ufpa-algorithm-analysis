import { faker } from "@faker-js/faker";
import QuickSort from "src/core/QuickSort";

describe("QuickSort tests", () => {
  /** @test */
  test("should instance a QuickSort correctly", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const qs = new QuickSort(numbers);

    expect(qs).not.toBeNull();
  });

  /** @test */
  test("should order a random sequence of 1-100 range as input and print the result of execution", () => {
    const numbers = new Array(100)
      .fill(0)
      .map((element) => (element = faker.number.int({ min: 1, max: 100 })));

    const qs = new QuickSort(numbers, true);

    expect(qs.sort()).toStrictEqual(
      numbers.sort((a: number, b: number): number => a - b)
    );
  });
});
