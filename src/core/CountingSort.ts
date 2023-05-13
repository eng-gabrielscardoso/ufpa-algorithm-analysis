/**
 * CountingSort Algorithm
 *
 * In computer science, counting sort is an algorithm for sorting a collection 
 * of objects according to keys that are small positive integers; that is, it 
 * is an integer sorting algorithm. It operates by counting the number of 
 * objects that possess distinct key values, and applying prefix sum on those 
 * counts to determine the positions of each key value in the output sequence. 
 * Its running time is linear in the number of items and the difference 
 * between the maximum key value and the minimum key value, so it is only 
 * suitable for direct use in situations where the variation in keys is not 
 * significantly greater than the number of items. It is often used as a 
 * subroutine in radix sort, another sorting algorithm, which can handle 
 * larger keys more efficiently.
 * 
 * Counting sort is not a comparison sort; it uses key values as indexes into
 * an array and the Ω(n log n) lower bound for comparison sorting will not
 * apply. Bucket sort may be used in lieu of counting sort, and entails a
 * similar time analysis. However, compared to counting sort, bucket sort
 * requires linked lists, dynamic arrays, or a large amount of pre-allocated
 * memory to hold the sets of items within each bucket, whereas counting sort
 * stores a single number (the count of items) per bucket.
 * 
 * @source https://en.wikipedia.org/wiki/Counting_sort
 * 
 * @author eng-gabrielscardoso
 */
export default class CountingSort {
  private arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  public sort(): number[] {
    const max = Math.max(...this.arr);
    const countArr = new Array(max + 1).fill(0);

    for (let i = 0; i < this.arr.length; i++) {
      countArr[this.arr[i]]++;
    }

    for (let i = 1; i < countArr.length; i++) {
      countArr[i] += countArr[i - 1];
    }

    const sortedArr = new Array(this.arr.length);

    for (let i = this.arr.length - 1; i >= 0; i--) {
      sortedArr[countArr[this.arr[i]] - 1] = this.arr[i];
      countArr[this.arr[i]]--;
    }

    return sortedArr;
  }
}
