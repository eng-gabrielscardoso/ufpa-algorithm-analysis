/**
 * QuickSort Algorithm
 *
 * Quicksort is an efficient, general-purpose sorting algorithm. Was developed
 * by Tony Hoare in 1959 and published in 1961.
 *
 * Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot'
 * element from the array and partitioning the elements into two sub-arrays,
 * according to whether they are less than or greater than the pivot. For this
 * reason it is sometimes called partition-exchange sort. The sub-arrays are
 * then sorted recursively. This can be done in-place, requiring small
 * additional amounts of memory to perform the sorting.
 *
 * Quicksort is a comparison sort, meaning that it can sort items of any type
 * for which a "less-than" relation is defined. Most implementations of
 * quicksort are not stable meaning that the relative order of equal sort
 * items is not preserved.
 *
 * Mathematical analysis of quicksort shows that, on average, the algorithm
 * takes O (n log n) comparisons to sort n items. In the worst case it makes
 * O (n^2) comparisons.
 *
 * @source https://en.wikipedia.org/wiki/Quicksort
 *
 * @author eng-gabrielscardoso
 */
export default class QuickSort {
  private arr: number[];
  private useMiddleElementAsPivot: boolean;

  constructor(arr: number[], useMiddleElementAsPivot = false) {
    this.arr = arr;
    this.useMiddleElementAsPivot = useMiddleElementAsPivot;
  }

  public sort(): number[] {
    if (this.arr.length <= 1) {
      return this.arr;
    }

    let pivotIndex: number;

    if (this.useMiddleElementAsPivot) {
      pivotIndex = Math.floor(this.arr.length / 2);
    } else {
      pivotIndex = Math.floor(Math.random() * this.arr.length);
    }

    const pivot = this.arr[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < this.arr.length; i++) {
      if (i === pivotIndex) {
        continue;
      }

      if (this.arr[i] < pivot) {
        left.push(this.arr[i]);
      } else {
        right.push(this.arr[i]);
      }
    }

    const sortedLeft = new QuickSort(left, this.useMiddleElementAsPivot).sort();
    const sortedRight = new QuickSort(
      right,
      this.useMiddleElementAsPivot
    ).sort();

    return [...sortedLeft, pivot, ...sortedRight];
  }
}
