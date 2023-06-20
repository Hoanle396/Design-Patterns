import { Fan } from "./receiver";

export interface ICommand {
  execute: () => void;
  undo: () => void;
}

export class Remote {
  turnOnCommand: ICommand;
  turnOffCommand: ICommand;

  constructor(turnOnCommand: ICommand, turnOffCommand: ICommand) {
    this.turnOnCommand = turnOnCommand;
    this.turnOffCommand = turnOffCommand;
  }

  TurnOnButtonClick() {
    this.turnOnCommand.execute();
  }

  TurnOffButtonClick() {
    this.turnOffCommand.execute();
  }
}
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
