import { LegacyLine } from "./LegacyLine";
import { LegacyRectangle } from "./LegacyRectangle";
import { LineAdapter } from "./LineAdapter";
import { RectangleAdapter } from "./RectangleAdapter";
import { IShape } from "./Shape";

const shapes: IShape[] = [
  new LineAdapter(new LegacyLine()),
  new RectangleAdapter(new LegacyRectangle()),
];

const x1 = 5,
  y1 = 10,
  x2 = -3,
  y2 = 2;

shapes.forEach((shape) => shape.Draw(x1, y1, x2, y2));
