export interface SortStrategy {
  sort: (items: string[]) => string[];
}
export class QuickSort implements SortStrategy {
  sort = (items: string[]) => {
    console.log("Quick sort");
    return items.sort();
  };
}

export class MergeSort implements SortStrategy {
  sort(items: string[]) {
    console.log("Merge sort");
    return items.sort();
  }
}

export class SelectionSort implements SortStrategy {
  sort = (items: string[]) => {
    console.log("Selection sort");
    return items.sort();
  };
}

export class SortedList {
  private strategy: SortStrategy;
  private items: string[] = [];

  setSortStrategy(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  add(name: string) {
    this.items.push(name);
  }

  sort() {
    this.strategy.sort(this.items);
  }
}
