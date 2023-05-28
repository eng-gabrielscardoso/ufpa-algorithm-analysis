import { faker } from "@faker-js/faker";
import configuration from "src/config/configuration";
import CountingSort from "src/core/CountingSort";

describe("CountingSort tests", () => {
  /** @test */
  test("should instance a CountingSort correctly", async () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const cs = new CountingSort(numbers);

    expect(cs).not.toBeNull();
  });

  /** @test */
  test("should compare a non ordered sequences and different inputs sizes to determinate algorithm efficiency", async () => {
    const numbers = (size: number): number[] =>
      new Array(size)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: size })));

    const n1 = numbers(10);
    const n2 = numbers(100);
    const n3 = numbers(1000);
    const n4 = numbers(10000);
    const n5 = numbers(100000);

    const c1 = new CountingSort(n1);
    const c2 = new CountingSort(n2);
    const c3 = new CountingSort(n3);
    const c4 = new CountingSort(n4);
    const c5 = new CountingSort(n5);

    if (configuration.appEnv === "test") {
      console.time(
        "Should order a non ordered sequence of 1-10 range as input and print the result of execution. Total sorting time"
      );
      c1.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-10 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-100 range as input and print the result of execution. Total sorting time"
      );
      c2.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-100 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-1000 range as input and print the result of execution. Total sorting time"
      );
      c3.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-1000 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-10000 range as input and print the result of execution. Total sorting time"
      );
      c4.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-10000 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-100000 range as input and print the result of execution. Total sorting time"
      );
      c5.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-100000 range as input and print the result of execution. Total sorting time"
      );
    }

    expect(c1.sort()).toStrictEqual(
      n1.sort((a: number, b: number): number => a - b)
    );
    expect(c2.sort()).toStrictEqual(
      n2.sort((a: number, b: number): number => a - b)
    );
    expect(c3.sort()).toStrictEqual(
      n3.sort((a: number, b: number): number => a - b)
    );
    expect(c4.sort()).toStrictEqual(
      n4.sort((a: number, b: number): number => a - b)
    );
    expect(c5.sort()).toStrictEqual(
      n5.sort((a: number, b: number): number => a - b)
    );
  });
});
