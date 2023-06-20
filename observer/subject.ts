import { IObserver } from "./interface";

export class Subject {
  private observers: IObserver[] = [];

  public attach(observer: IObserver) {
    this.observers.push(observer);
  }
  public detach(observer: IObserver) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  public notifyChange(message: string) {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}
