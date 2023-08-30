import { SortStrategy } from "./interface";

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