import { faker } from "@faker-js/faker";
import QuickSort from "src/core/QuickSort";
import configuration from "src/config/configuration";

describe("QuickSort tests", () => {
  /** @test */
  test("should instance a QuickSort correctly", async () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const qs = new QuickSort(numbers);

    expect(qs).not.toBeNull();
  });

  /** @test */
  test("should order a random sequence of 1-100 range as input and print the result of execution with middle pivot", async () => {
    const numbers = new Array(100)
      .fill(0)
      .map((element) => (element = faker.number.int({ min: 1, max: 100 })));

    const qs = new QuickSort(numbers, true);

    if (configuration.appEnv === "test") {
      console.time("Sorting time");
      console.log(qs.sort());
      console.timeEnd("Sorting time");
    }

    expect(qs.sort()).toStrictEqual(
      numbers.sort((a: number, b: number): number => a - b)
    );
  });

  /** @test */
  test("should compare ordered and non ordered sequences and different inputs sizes to determinate algorithm efficiency with middle pivot", async () => {
    const numbers = (size: number): number[] =>
      new Array(size)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: size })));

    const n1 = numbers(100);
    const n2 = numbers(1000);
    const n3 = numbers(100000);

    const growing1 = n1.sort((a: number, b: number): number => a - b);
    const growing2 = n2.sort((a: number, b: number): number => a - b);
    const growing3 = n3.sort((a: number, b: number): number => a - b);

    const q1 = new QuickSort(n1);
    const q2 = new QuickSort(n2);
    const q3 = new QuickSort(n3);

    expect(q1.sort()).toStrictEqual(growing1);
    expect(q2.sort()).toStrictEqual(growing2);
    expect(q3.sort()).toStrictEqual(growing3);
  });

  /** @test */
  test("should order a random sequence of 1-100 range as input and print the result of execution with random pivot", async () => {
    const numbers = new Array(100)
      .fill(0)
      .map((element) => (element = faker.number.int({ min: 1, max: 100 })));

    const qs = new QuickSort(numbers, true);

    expect(qs.sort()).toStrictEqual(
      numbers.sort((a: number, b: number): number => a - b)
    );
  });

  /** @test */
  test("should compare ordered and non ordered sequences and different inputs sizes to determinate algorithm efficiency with random pivot", async () => {
    const numbers = (size: number): number[] =>
      new Array(size)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: size })));

    const n1 = numbers(100);
    const n2 = numbers(1000);
    const n3 = numbers(100000);

    const growing1 = n1.sort((a: number, b: number): number => a - b);
    const growing2 = n2.sort((a: number, b: number): number => a - b);
    const growing3 = n3.sort((a: number, b: number): number => a - b);

    const q1 = new QuickSort(n1);
    const q2 = new QuickSort(n2);
    const q3 = new QuickSort(n3);

    expect(q1.sort()).toStrictEqual(growing1);
    expect(q2.sort()).toStrictEqual(growing2);
    expect(q3.sort()).toStrictEqual(growing3);
  });
});
