/**
 * RadixSort Algorithm
 *
 * In computer science, radix sort is a non-comparative sorting algorithm. It
 * avoids comparison by creating and distributing elements into buckets
 * according to their radix. For elements with more than one significant
 * digit, this bucketing process is repeated for each digit, while preserving
 * the ordering of the prior step, until all digits have been considered. For
 * this reason, radix sort has also been called bucket sort and digital sort.
 *
 * Radix sort can be applied to data that can be sorted lexicographically, be
 * they integers, words, punch cards, playing cards, or the mail.
 *
 * Mathematical analysis of radix sort shows that haven't a better or worst
 * case, so the performance takes O (w * n) comparisons
 *
 * @source https://en.wikipedia.org/wiki/Radix_sort
 *
 * @author eng-gabrielscardoso
 */
export default class RadixSort {
  private arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  public sort(): number[] {
    const max = Math.max(...this.arr);
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
      this.countingSort(exp);
      exp *= 10;
    }

    return this.arr;
  }

  private countingSort(exp: number): void {
    const countArr = new Array(10).fill(0);

    for (let i = 0; i < this.arr.length; i++) {
      const digit = Math.floor(this.arr[i] / exp) % 10;
      countArr[digit]++;
    }

    for (let i = 1; i < countArr.length; i++) {
      countArr[i] += countArr[i - 1];
    }

    const sortedArr = new Array(this.arr.length);

    for (let i = this.arr.length - 1; i >= 0; i--) {
      const digit = Math.floor(this.arr[i] / exp) % 10;
      sortedArr[countArr[digit] - 1] = this.arr[i];
      countArr[digit]--;
    }

    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i] = sortedArr[i];
    }
  }
}
