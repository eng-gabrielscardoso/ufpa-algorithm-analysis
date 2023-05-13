import { faker } from "@faker-js/faker";
import CountingSort from "src/core/CountingSort";

describe("CountingSort tests", () => {
  /** @test */
  test("should instance a CountingSort correctly", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const cs = new CountingSort(numbers);

    expect(cs).not.toBeNull();
  });
});
