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
  test("should order a random 1-100 range elements and print execution with middle pivot", async () => {
    const numbers = new Array(100)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: 100 })));

      const qs = new QuickSort(numbers, true);

      if (configuration.appEnv === "test") {
        console.time("Should order a random 1-100 range elements and print execution with middle pivot. Total sorting time")
        console.log(numbers)
        console.log(qs.sort())
        console.timeEnd("Should order a random 1-100 range elements and print execution with middle pivot. Total sorting time")
      }

      expect(qs.sort()).toStrictEqual(numbers.sort((a: number, b: number): number => a - b))
  });

  /** @test */
  test("should order a ascending ordered sequences and different inputs sizes to determinate algorithm efficiency with middle pivot", async () => {
    const numbers = (size: number): number[] =>
      new Array(size)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: size })));

    const n1 = numbers(100);
    const n2 = numbers(1000);
    const n3 = numbers(10000);
    const n4 = numbers(100000);
    const n5 = numbers(1000000);

    const ascending1 = n1.sort((a: number, b: number): number => a - b);
    const ascending2 = n2.sort((a: number, b: number): number => a - b);
    const ascending3 = n3.sort((a: number, b: number): number => a - b);
    const ascending4 = n4.sort((a: number, b: number): number => a - b);
    const ascending5 = n5.sort((a: number, b: number): number => a - b);

    const q1 = new QuickSort(n1, true);
    const q2 = new QuickSort(n2, true);
    const q3 = new QuickSort(n3, true);
    const q4 = new QuickSort(n4, true);
    const q5 = new QuickSort(n5, true);

    if (configuration.appEnv === "test") {
      console.time(
        "Should order a ascending ordered sequence of 1-100 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q1.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-100 range as input and print the result of execution with middle pivot. Total sorting time"
      );

      console.time(
        "Should order a ascending ordered sequence of 1-1000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q2.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-1000 range as input and print the result of execution with middle pivot. Total sorting time"
      );

      console.time(
        "Should order a ascending ordered sequence of 1-10000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q3.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-10000 range as input and print the result of execution with middle pivot. Total sorting time"
      );

      console.time(
        "Should order a ascending ordered sequence of 1-100000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q4.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-100000 range as input and print the result of execution with middle pivot. Total sorting time"
      );

      console.time(
        "Should order a ascending ordered sequence of 1-1000000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q5.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-1000000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
    }

    expect(q1.sort()).toStrictEqual(ascending1);
    expect(q2.sort()).toStrictEqual(ascending2);
    expect(q3.sort()).toStrictEqual(ascending3);
    expect(q4.sort()).toStrictEqual(ascending4);
    expect(q5.sort()).toStrictEqual(ascending5);
  });

  /** @test */
  test("should order a descending ordered sequences and different inputs sizes to determinate algorithm efficiency with middle pivot", async () => {
    const numbers = (size: number): number[] =>
      new Array(size)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: size })));

    const n1 = numbers(100);
    const n2 = numbers(1000);
    const n3 = numbers(10000);
    const n4 = numbers(100000);
    const n5 = numbers(1000000);

    const descending1 = n1
      .sort((a: number, b: number): number => a - b)
      .reverse();
    const descending2 = n2
      .sort((a: number, b: number): number => a - b)
      .reverse();
    const descending3 = n3
      .sort((a: number, b: number): number => a - b)
      .reverse();
    const descending4 = n4
      .sort((a: number, b: number): number => a - b)
      .reverse();
    const descending5 = n5
      .sort((a: number, b: number): number => a - b)
      .reverse();

    const q1 = new QuickSort(n1, true);
    const q2 = new QuickSort(n2, true);
    const q3 = new QuickSort(n3, true);
    const q4 = new QuickSort(n4, true);
    const q5 = new QuickSort(n5, true);

    if (configuration.appEnv === "test") {
      console.time(
        "Should order a descending ordered sequence of 1-100 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q1.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-100 range as input and print the result of execution with middle pivot. Total sorting time"
      );

      console.time(
        "Should order a descending ordered sequence of 1-1000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q2.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-1000 range as input and print the result of execution with middle pivot. Total sorting time"
      );

      console.time(
        "Should order a descending ordered sequence of 1-10000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q3.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-10000 range as input and print the result of execution with middle pivot. Total sorting time"
      );

      console.time(
        "Should order a descending ordered sequence of 1-100000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q4.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-100000 range as input and print the result of execution with middle pivot. Total sorting time"
      );

      console.time(
        "Should order a descending ordered sequence of 1-1000000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q5.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-1000000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
    }

    expect(q1.sort()).toStrictEqual(descending1.reverse());
    expect(q2.sort()).toStrictEqual(descending2.reverse());
    expect(q3.sort()).toStrictEqual(descending3.reverse());
    expect(q4.sort()).toStrictEqual(descending4.reverse());
    expect(q5.sort()).toStrictEqual(descending5.reverse());
  });

  /** @test */
  test("should compare a non ordered sequences and different inputs sizes to determinate algorithm efficiency with middle pivot", async () => {
    const numbers = (size: number): number[] =>
      new Array(size)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: size })));

    const n1 = numbers(100);
    const n2 = numbers(1000);
    const n3 = numbers(10000);
    const n4 = numbers(100000);
    const n5 = numbers(1000000);

    const q1 = new QuickSort(n1, true);
    const q2 = new QuickSort(n2, true);
    const q3 = new QuickSort(n3, true);
    const q4 = new QuickSort(n4, true);
    const q5 = new QuickSort(n5, true);

    if (configuration.appEnv === "test") {
      console.time(
        "Should order a non ordered sequence of 1-100 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q1.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-100 range as input and print the result of execution with middle pivot. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-1000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q2.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-1000 range as input and print the result of execution with middle pivot. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-10000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q3.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-10000 range as input and print the result of execution with middle pivot. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-100000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q4.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-100000 range as input and print the result of execution with middle pivot. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-1000000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
      q5.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-1000000 range as input and print the result of execution with middle pivot. Total sorting time"
      );
    }

    expect(q1.sort()).toStrictEqual(
      n1.sort((a: number, b: number): number => a - b)
    );
    expect(q2.sort()).toStrictEqual(
      n2.sort((a: number, b: number): number => a - b)
    );
    expect(q3.sort()).toStrictEqual(
      n3.sort((a: number, b: number): number => a - b)
    );
    expect(q4.sort()).toStrictEqual(
      n4.sort((a: number, b: number): number => a - b)
    );
    expect(q5.sort()).toStrictEqual(
      n5.sort((a: number, b: number): number => a - b)
    );
  });

  /** @test */
  test("should order a ascending ordered sequences and different inputs sizes to determinate algorithm efficiency with random pivot", async () => {
    const numbers = (size: number): number[] =>
      new Array(size)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: size })));

    const n1 = numbers(100);
    const n2 = numbers(1000);
    const n3 = numbers(10000);
    const n4 = numbers(100000);
    const n5 = numbers(1000000);

    const ascending1 = n1.sort((a: number, b: number): number => a - b);
    const ascending2 = n2.sort((a: number, b: number): number => a - b);
    const ascending3 = n3.sort((a: number, b: number): number => a - b);
    const ascending4 = n4.sort((a: number, b: number): number => a - b);
    const ascending5 = n5.sort((a: number, b: number): number => a - b);

    const q1 = new QuickSort(n1);
    const q2 = new QuickSort(n2);
    const q3 = new QuickSort(n3);
    const q4 = new QuickSort(n4);
    const q5 = new QuickSort(n5);

    if (configuration.appEnv === "test") {
      console.time(
        "Should order a ascending ordered sequence of 1-100 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q1.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-100 range as input and print the result of execution with random pivot. Total sorting time"
      );

      console.time(
        "Should order a ascending ordered sequence of 1-1000 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q2.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-1000 range as input and print the result of execution with random pivot. Total sorting time"
      );

      console.time(
        "Should order a ascending ordered sequence of 1-10000 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q3.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-10000 range as input and print the result of execution with random pivot. Total sorting time"
      );

      console.time(
        "Should order a ascending ordered sequence of 1-100000 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q4.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-100000 range as input and print the result of execution with random pivot. Total sorting time"
      );

      console.time(
        "Should order a ascending ordered sequence of 1-1000000 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q5.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-1000000 range as input and print the result of execution with random pivot. Total sorting time"
      );
    }

    expect(q1.sort()).toStrictEqual(ascending1);
    expect(q2.sort()).toStrictEqual(ascending2);
    expect(q3.sort()).toStrictEqual(ascending3);
    expect(q4.sort()).toStrictEqual(ascending4);
    expect(q5.sort()).toStrictEqual(ascending5);
  });

  /** @test */
  test("should order a descending ordered sequences and different inputs sizes to determinate algorithm efficiency with random pivot", async () => {
    const numbers = (size: number): number[] =>
      new Array(size)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: size })));

    const n1 = numbers(100);
    const n2 = numbers(1000);
    const n3 = numbers(10000);
    const n4 = numbers(100000);
    const n5 = numbers(1000000);

    const descending1 = n1
      .sort((a: number, b: number): number => a - b)
      .reverse();
    const descending2 = n2
      .sort((a: number, b: number): number => a - b)
      .reverse();
    const descending3 = n3
      .sort((a: number, b: number): number => a - b)
      .reverse();
    const descending4 = n4
      .sort((a: number, b: number): number => a - b)
      .reverse();
    const descending5 = n5
      .sort((a: number, b: number): number => a - b)
      .reverse();

    const q1 = new QuickSort(n1);
    const q2 = new QuickSort(n2);
    const q3 = new QuickSort(n3);
    const q4 = new QuickSort(n4);
    const q5 = new QuickSort(n5);

    if (configuration.appEnv === "test") {
      console.time(
        "Should order a descending ordered sequence of 1-100 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q1.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-100 range as input and print the result of execution with random pivot. Total sorting time"
      );

      console.time(
        "Should order a descending ordered sequence of 1-1000 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q2.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-1000 range as input and print the result of execution with random pivot. Total sorting time"
      );

      console.time(
        "Should order a descending ordered sequence of 1-10000 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q3.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-10000 range as input and print the result of execution with random pivot. Total sorting time"
      );

      console.time(
        "Should order a descending ordered sequence of 1-100000 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q4.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-100000 range as input and print the result of execution with random pivot. Total sorting time"
      );

      console.time(
        "Should order a descending ordered sequence of 1-1000000 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q5.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-1000000 range as input and print the result of execution with random pivot. Total sorting time"
      );
    }

    expect(q1.sort()).toStrictEqual(descending1.reverse());
    expect(q2.sort()).toStrictEqual(descending2.reverse());
    expect(q3.sort()).toStrictEqual(descending3.reverse());
    expect(q4.sort()).toStrictEqual(descending4.reverse());
    expect(q5.sort()).toStrictEqual(descending5.reverse());
  });

  /** @test */
  test("should compare a non ordered sequences and different inputs sizes to determinate algorithm efficiency with random pivot", async () => {
    const numbers = (size: number): number[] =>
      new Array(size)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: size })));

    const n1 = numbers(100);
    const n2 = numbers(1000);
    const n3 = numbers(10000);
    const n4 = numbers(100000);
    const n5 = numbers(1000000);

    const q1 = new QuickSort(n1);
    const q2 = new QuickSort(n2);
    const q3 = new QuickSort(n3);
    const q4 = new QuickSort(n4);
    const q5 = new QuickSort(n5);

    if (configuration.appEnv === "test") {
      console.time(
        "Should order a non ordered sequence of 1-100 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q1.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-100 range as input and print the result of execution with random pivot. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-1000 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q2.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-1000 range as input and print the result of execution with random pivot. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-10000 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q3.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-10000 range as input and print the result of execution with random pivot. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-100000 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q4.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-100000 range as input and print the result of execution with random pivot. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-1000000 range as input and print the result of execution with random pivot. Total sorting time"
      );
      q5.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-1000000 range as input and print the result of execution with random pivot. Total sorting time"
      );
    }

    expect(q1.sort()).toStrictEqual(
      n1.sort((a: number, b: number): number => a - b)
    );
    expect(q2.sort()).toStrictEqual(
      n2.sort((a: number, b: number): number => a - b)
    );
    expect(q3.sort()).toStrictEqual(
      n3.sort((a: number, b: number): number => a - b)
    );
    expect(q4.sort()).toStrictEqual(
      n4.sort((a: number, b: number): number => a - b)
    );
    expect(q5.sort()).toStrictEqual(
      n5.sort((a: number, b: number): number => a - b)
    );
  });
});
