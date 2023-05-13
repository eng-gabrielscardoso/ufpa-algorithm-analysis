/**
 * BucketSort Algorithm
 * 
 * Bucket sort, or bin sort, is a sorting algorithm that works by distributing
 * the elements of an array into a number of buckets. Each bucket is then 
 * sorted individually, either using a different sorting algorithm, or by 
 * recursively applying the bucket sorting algorithm. It is a distribution 
 * sort, a generalization of pigeonhole sort that allows multiple keys per 
 * bucket, and is a cousin of radix sort in the most-to-least significant 
 * digit flavor. Bucket sort can be implemented with comparisons and therefore 
 * can also be considered a comparison sort algorithm. The computational 
 * complexity depends on the algorithm used to sort each bucket, the number of 
 * buckets to use, and whether the input is uniformly distributed. 
 * 
 * Bucket sort works as follows:
 * 1. Set up an array of initially empty "buckets".
 * 2. Scatter: Go over the original array, putting each object in its bucket
 * 3. Sort each non-empty bucket.
 * 4. Gather: Visit the buckets in order and put all elements back into the original array.
 * 
 * Mathematical analysis shows that in the average the bucket sort performs O (n + (n^2 / k) + k) and in worst case O (n^2)
 *
 * @source https://en.wikipedia.org/wiki/Bucket_sort
 * 
 * @author eng-gabrielscardoso
 */
export default class BucketSort {
  private arr: number[];
  private bucketSize: number;

  constructor(arr: number[], bucketSize: number) {
    this.arr = arr;
    this.bucketSize = bucketSize;
  }

  public sort(): number[] {
    const max = Math.max(...this.arr);
    const min = Math.min(...this.arr);
    const bucketCount = Math.floor((max - min) / this.bucketSize) + 1;
    const buckets: number[][] = new Array(bucketCount);

    for (let i = 0; i < bucketCount; i++) {
      buckets[i] = [];
    }

    for (let i = 0; i < this.arr.length; i++) {
      const bucketIndex = Math.floor((this.arr[i] - min) / this.bucketSize);
      buckets[bucketIndex].push(this.arr[i]);
    }

    for (let i = 0; i < buckets.length; i++) {
      buckets[i] = this.insertionSort(buckets[i]);
    }

    let sortedArr: number[] = [];

    for (let i = 0; i < buckets.length; i++) {
      sortedArr = sortedArr.concat(buckets[i]);
    }

    return sortedArr;
  }

  private insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = key;
    }

    return arr;
  }
}
