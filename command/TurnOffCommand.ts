import { ICommand } from "./interface";
import { Fan } from "./receiver";

export class TurnOffCommand implements ICommand {
  fan: Fan;

  constructor(fan: Fan) {
    this.fan = fan;
  }

  execute() {
    this.fan.TurnOff();
  }

  undo() {
    this.fan.TurnOn();
  }
}
