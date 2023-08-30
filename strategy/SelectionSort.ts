import { SortStrategy } from "./interface";

export class SelectionSort implements SortStrategy {
  sort = (items: string[]) => {
    console.log("Selection sort");
    return items.sort();
  };
}