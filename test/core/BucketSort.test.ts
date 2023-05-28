import { faker } from "@faker-js/faker";
import configuration from "src/config/configuration";
import BucketSort from "src/core/BucketSort";

describe("BucketSort tests", () => {
  /** @test */
  test.skip("should instance a BucketSort correctly", async () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const bs = new BucketSort(numbers, 1);

    expect(bs).not.toBeNull();
  });

  /** @test */
  test("should order correctly a non-uniform distribution of elements", async () => {
    const numbers = (size: number): number[] =>
      new Array(size)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: size })));

        const n1 = numbers(10);
        const n2 = numbers(100);
        const n3 = numbers(1000);
        const n4 = numbers(10000);
        const n5 = numbers(100000);
    
        const b1 = new BucketSort(n1, 1);
        const b2 = new BucketSort(n2, 10);
        const b3 = new BucketSort(n3, 100);
        const b4 = new BucketSort(n4, 1000);
        const b5 = new BucketSort(n5, 10000);

        if (configuration.appEnv === "test") {
          console.time(
            "Should order a non-uniform distribution of 1-10 range as input and print the result of execution. Total sorting time"
          );
          b1.sort();
          console.timeEnd(
            "Should order a non-uniform distribution of 1-10 range as input and print the result of execution. Total sorting time"
          );
    
          console.time(
            "Should order a non-uniform distribution of 1-100 range as input and print the result of execution. Total sorting time"
          );
          b2.sort();
          console.timeEnd(
            "Should order a non-uniform distribution of 1-100 range as input and print the result of execution. Total sorting time"
          );
    
          console.time(
            "Should order a non-uniform distribution of 1-1000 range as input and print the result of execution. Total sorting time"
          );
          b3.sort();
          console.timeEnd(
            "Should order a non-uniform distribution of 1-1000 range as input and print the result of execution. Total sorting time"
          );
    
          console.time(
            "Should order a non-uniform distribution of 1-10000 range as input and print the result of execution. Total sorting time"
          );
          b4.sort();
          console.timeEnd(
            "Should order a non-uniform distribution of 1-10000 range as input and print the result of execution. Total sorting time"
          );
    
          console.time(
            "Should order a non-uniform distribution of 1-100000 range as input and print the result of execution. Total sorting time"
          );
          b5.sort();
          console.timeEnd(
            "Should order a non-uniform distribution of 1-100000 range as input and print the result of execution. Total sorting time"
          );
        }

        expect(b1.sort()).toStrictEqual(
          n1.sort((a: number, b: number): number => a - b)
        );
        expect(b2.sort()).toStrictEqual(
          n2.sort((a: number, b: number): number => a - b)
        );
        expect(b3.sort()).toStrictEqual(
          n3.sort((a: number, b: number): number => a - b)
        );
        expect(b4.sort()).toStrictEqual(
          n4.sort((a: number, b: number): number => a - b)
        );
        expect(b5.sort()).toStrictEqual(
          n5.sort((a: number, b: number): number => a - b)
        );
  });

  /** @test */
  test("should order correctly a uniform distribution of elements", async () => {
    const numbers = (size: number): number[] =>
      new Array(size)
        .fill(0)
        .map((element) => (element = faker.number.int({ min: 1, max: size * 10 })));

        const n1 = numbers(10);
        const n2 = numbers(100);
        const n3 = numbers(1000);
        const n4 = numbers(10000);
        const n5 = numbers(100000);
    
        const b1 = new BucketSort(n1, 1);
        const b2 = new BucketSort(n2, 10);
        const b3 = new BucketSort(n3, 100);
        const b4 = new BucketSort(n4, 1000);
        const b5 = new BucketSort(n5, 10000);

        if (configuration.appEnv === "test") {
          console.time(
            "Should order a uniform distribution of 1-10 range as input and print the result of execution. Total sorting time"
          );
          b1.sort();
          console.timeEnd(
            "Should order a uniform distribution of 1-10 range as input and print the result of execution. Total sorting time"
          );
    
          console.time(
            "Should order a uniform distribution of 1-100 range as input and print the result of execution. Total sorting time"
          );
          b2.sort();
          console.timeEnd(
            "Should order a uniform distribution of 1-100 range as input and print the result of execution. Total sorting time"
          );
    
          console.time(
            "Should order a uniform distribution of 1-1000 range as input and print the result of execution. Total sorting time"
          );
          b3.sort();
          console.timeEnd(
            "Should order a uniform distribution of 1-1000 range as input and print the result of execution. Total sorting time"
          );
    
          console.time(
            "Should order a uniform distribution of 1-10000 range as input and print the result of execution. Total sorting time"
          );
          b4.sort();
          console.timeEnd(
            "Should order a uniform distribution of 1-10000 range as input and print the result of execution. Total sorting time"
          );
    
          console.time(
            "Should order a uniform distribution of 1-100000 range as input and print the result of execution. Total sorting time"
          );
          b5.sort();
          console.timeEnd(
            "Should order a uniform distribution of 1-100000 range as input and print the result of execution. Total sorting time"
          );
        }

        expect(b1.sort()).toStrictEqual(
          n1.sort((a: number, b: number): number => a - b)
        );
        expect(b2.sort()).toStrictEqual(
          n2.sort((a: number, b: number): number => a - b)
        );
        expect(b3.sort()).toStrictEqual(
          n3.sort((a: number, b: number): number => a - b)
        );
        expect(b4.sort()).toStrictEqual(
          n4.sort((a: number, b: number): number => a - b)
        );
        expect(b5.sort()).toStrictEqual(
          n5.sort((a: number, b: number): number => a - b)
        );
  });
});
