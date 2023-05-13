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

  constructor(arr: number[]) {
    this.arr = arr;
  }

  public sort(): number[] {
    if (this.arr.length <= 1) {
      return this.arr;
    }

    const middleIndex = Math.floor(this.arr.length / 2);
    const pivot = this.arr[middleIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < this.arr.length; i++) {
      if (i === middleIndex) {
        continue;
      }

      if (this.arr[i] < pivot) {
        left.push(this.arr[i]);
      } else {
        right.push(this.arr[i]);
      }
    }

    const sortedLeft = new QuickSort(left).sort();
    const sortedRight = new QuickSort(right).sort();

    return [...sortedLeft, pivot, ...sortedRight];
  }
}
