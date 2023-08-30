import { SortStrategy } from "./interface";

export class MergeSort implements SortStrategy {
  sort(items: string[]) {
    console.log("Merge sort");
    return items.sort();
  }
}