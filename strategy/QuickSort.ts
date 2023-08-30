import { SortStrategy } from "./interface";

export class QuickSort implements SortStrategy {
  sort = (items: string[]) => {
    console.log("Quick sort");
    return items.sort();
  };
}