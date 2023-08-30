import { ICommand } from "./interface";

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
