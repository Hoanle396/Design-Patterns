import { LegacyRectangle } from "./LegacyRectangle";
import { IShape } from "./Shape";

export class RectangleAdapter implements IShape {
  legacyRectangle: LegacyRectangle;

  constructor(legacyRectangle: LegacyRectangle) {
    this.legacyRectangle = legacyRectangle;
  }

  Draw(x1: number, y1: number, x2: number, y2: number) {
    const x: number = Math.min(x1, x2);
    const y: number = Math.max(y1, y2);
    const w: number = Math.abs(x2 - x1);
    const h: number = Math.abs(y2 - y1);
    this.legacyRectangle.Draw(x, y, w, h);
  }
}