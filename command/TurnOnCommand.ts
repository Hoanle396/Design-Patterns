import { ICommand } from "./interface";
import { Fan } from "./receiver";

export class TurnOnCommand implements ICommand {
  fan: Fan;

  constructor(fan: Fan) {
    this.fan = fan;
  }

  execute() {
    this.fan.TurnOn();
  }

  undo() {
    this.fan.TurnOff();
  }
}