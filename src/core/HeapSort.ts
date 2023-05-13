/**
 * HeapSort Algorithm
 *
 * In computer science, heapsort is a comparison-based sorting algorithm. 
 * Heapsort can be thought of as an improved selection sort: like selection 
 * sort, heapsort divides its input into a sorted and an unsorted region, and 
 * it iteratively shrinks the unsorted region by extracting the largest 
 * element from it and inserting it into the sorted region. Unlike selection 
 * sort, heapsort does not waste time with a linear-time scan of the unsorted 
 * region; rather, heap sort maintains the unsorted region in a heap data 
 * structure to more quickly find the largest element in each step.
 * 
 * Although somewhat slower in practice on most machines than a
 * well-implemented quicksort, it has the advantage of a more favorable 
 * worst-case O(n log n) runtime (and as such is used by Introsort as a 
 * fallback should it detect that quicksort is becoming degenerate). Heapsort 
 * is an in-place algorithm, but it is not a stable sort. 
 * 
 * Heapsort was invented by J. W. J. Williams in 1964. This was also the birth
 * of the heap, presented already by Williams as a useful data structure in
 * its own right. In the same year, Robert W. Floyd published an improved
 * version that could sort an array in-place, continuing his earlier research
 * into the treesort algorithm.
 *
 * @source https://en.wikipedia.org/wiki/Heapsort
 * 
 * @author eng-gabrielscardoso
 */
export default class HeapSort {
  private arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  public sort(): number[] {
    this.buildMaxHeap();

    for (let i = this.arr.length - 1; i > 0; i--) {
      this.swap(0, i);
      this.heapify(0, i);
    }

    return this.arr;
  }

  private buildMaxHeap(): void {
    const n = this.arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(i, n);
    }
  }

  private heapify(i: number, n: number): void {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < n && this.arr[left] > this.arr[largest]) {
      largest = left;
    }

    if (right < n && this.arr[right] > this.arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      this.swap(i, largest);
      this.heapify(largest, n);
    }
  }

  private swap(i: number, j: number): void {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }
}
