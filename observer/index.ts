import { IObserver } from "./interface";
import { Subject } from "./subject";

const subject = new Subject();
const observer1: IObserver = {
  update(message: string) {
    console.log("Message 1 changed: ", message);
  },
};
const observer2: IObserver = {
  update(message: string) {
    console.log("Message 2 changed: ", message);
  },
};
subject.attach(observer1);
subject.attach(observer2);
subject.notifyChange("Test change state 1");
subject.detach(observer1);
subject.notifyChange("Test change state 2");
