import { faker } from "@faker-js/faker";
import configuration from "src/config/configuration";
import HeapSort from "src/core/HeapSort";

describe("HeapSort tests", () => {
  /** @test */
  test("should instance a HeapSort correctly", async () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const hs = new HeapSort(numbers);

    expect(hs).not.toBeNull();
  });

  /** @test */
  test("should order a random 1-100 range elements and print execution", async () => {
    const numbers = new Array(100)
      .fill(0)
      .map((element) => (element = faker.number.int({ min: 1, max: 100 })));

    const hs = new HeapSort(numbers);

    if (configuration.appEnv === "test") {
      console.time(
        "Should order a random 1-100 range elements and print execution. Total sorting time"
      );
      console.log(numbers);
      console.log(hs.sort());
      console.timeEnd(
        "Should order a random 1-100 range elements and print execution. Total sorting time"
      );
    }

    expect(hs.sort()).toStrictEqual(
      numbers.sort((a: number, b: number): number => a - b)
    );
  });

  /** @test */
  test("should order a ascending ordered sequences and different inputs sizes to determinate algorithm efficiency", async () => {
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

    const h1 = new HeapSort(n1);
    const h2 = new HeapSort(n2);
    const h3 = new HeapSort(n3);
    const h4 = new HeapSort(n4);
    const h5 = new HeapSort(n5);

    if (configuration.appEnv === "test") {
      console.time(
        "Should order a ascending ordered sequence of 1-100 range as input and print the result of execution. Total sorting time"
      );
      h1.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-100 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a ascending ordered sequence of 1-1000 range as input and print the result of execution. Total sorting time"
      );
      h2.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-1000 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a ascending ordered sequence of 1-10000 range as input and print the result of execution. Total sorting time"
      );
      h3.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-10000 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a ascending ordered sequence of 1-100000 range as input and print the result of execution. Total sorting time"
      );
      h4.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-100000 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a ascending ordered sequence of 1-1000000 range as input and print the result of execution. Total sorting time"
      );
      h5.sort();
      console.timeEnd(
        "Should order a ascending ordered sequence of 1-1000000 range as input and print the result of execution. Total sorting time"
      );
    }

    expect(h1.sort()).toStrictEqual(ascending1);
    expect(h2.sort()).toStrictEqual(ascending2);
    expect(h3.sort()).toStrictEqual(ascending3);
    expect(h4.sort()).toStrictEqual(ascending4);
    expect(h5.sort()).toStrictEqual(ascending5);
  });

  /** @test */
  test("should order a descending ordered sequences and different inputs sizes to determinate algorithm efficiency", async () => {
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

    const h1 = new HeapSort(n1);
    const h2 = new HeapSort(n2);
    const h3 = new HeapSort(n3);
    const h4 = new HeapSort(n4);
    const h5 = new HeapSort(n5);

    if (configuration.appEnv === "test") {
      console.time(
        "Should order a descending ordered sequence of 1-100 range as input and print the result of execution. Total sorting time"
      );
      h1.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-100 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a descending ordered sequence of 1-1000 range as input and print the result of execution. Total sorting time"
      );
      h2.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-1000 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a descending ordered sequence of 1-10000 range as input and print the result of execution. Total sorting time"
      );
      h3.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-10000 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a descending ordered sequence of 1-100000 range as input and print the result of execution. Total sorting time"
      );
      h4.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-100000 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a descending ordered sequence of 1-1000000 range as input and print the result of execution. Total sorting time"
      );
      h5.sort();
      console.timeEnd(
        "Should order a descending ordered sequence of 1-1000000 range as input and print the result of execution. Total sorting time"
      );
    }

    expect(h1.sort()).toStrictEqual(descending1.reverse());
    expect(h2.sort()).toStrictEqual(descending2.reverse());
    expect(h3.sort()).toStrictEqual(descending3.reverse());
    expect(h4.sort()).toStrictEqual(descending4.reverse());
    expect(h5.sort()).toStrictEqual(descending5.reverse());
  });

  /** @test */
  test("should compare a non ordered sequences and different inputs sizes to determinate algorithm efficiency", async () => {
    const numbers = (size: number): number[] =>
      new Array(size)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: size })));

    const n1 = numbers(100);
    const n2 = numbers(1000);
    const n3 = numbers(10000);
    const n4 = numbers(100000);
    const n5 = numbers(1000000);

    const h1 = new HeapSort(n1);
    const h2 = new HeapSort(n2);
    const h3 = new HeapSort(n3);
    const h4 = new HeapSort(n4);
    const h5 = new HeapSort(n5);

    if (configuration.appEnv === "test") {
      console.time(
        "Should order a non ordered sequence of 1-100 range as input and print the result of execution. Total sorting time"
      );
      h1.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-100 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-1000 range as input and print the result of execution. Total sorting time"
      );
      h2.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-1000 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-10000 range as input and print the result of execution. Total sorting time"
      );
      h3.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-10000 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-100000 range as input and print the result of execution. Total sorting time"
      );
      h4.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-100000 range as input and print the result of execution. Total sorting time"
      );

      console.time(
        "Should order a non ordered sequence of 1-1000000 range as input and print the result of execution. Total sorting time"
      );
      h5.sort();
      console.timeEnd(
        "Should order a non ordered sequence of 1-1000000 range as input and print the result of execution. Total sorting time"
      );
    }

    expect(h1.sort()).toStrictEqual(
      n1.sort((a: number, b: number): number => a - b)
    );
    expect(h2.sort()).toStrictEqual(
      n2.sort((a: number, b: number): number => a - b)
    );
    expect(h3.sort()).toStrictEqual(
      n3.sort((a: number, b: number): number => a - b)
    );
    expect(h4.sort()).toStrictEqual(
      n4.sort((a: number, b: number): number => a - b)
    );
    expect(h5.sort()).toStrictEqual(
      n5.sort((a: number, b: number): number => a - b)
    );
  });
});
