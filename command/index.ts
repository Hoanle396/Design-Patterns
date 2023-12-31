import { Remote } from "./Remote";
import { TurnOffCommand } from "./TurnOffCommand";
import { TurnOnCommand } from "./TurnOnCommand";
import { Fan } from "./receiver";

const fan = new Fan();

const turnOnCommand = new TurnOnCommand(fan);
const turnOffCommand = new TurnOffCommand(fan);

const remote = new Remote(turnOnCommand, turnOffCommand);

remote.TurnOnButtonClick();
remote.TurnOffButtonClick();
