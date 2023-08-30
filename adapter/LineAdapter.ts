import { LegacyLine } from "./LegacyLine";
import { IShape } from "./Shape";

export class LineAdapter implements IShape {
  legacyLine: LegacyLine;

  constructor(legacyLine: LegacyLine) {
    this.legacyLine = legacyLine;
  }

  Draw(x1: number, y1: number, x2: number, y2: number) {
    this.legacyLine.Draw(x1, y1, x2, y2);
  }
}