class RectangleAdapter implements IShape {
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
class LineAdapter implements IShape {
  legacyLine: LegacyLine;

  constructor(legacyLine: LegacyLine) {
    this.legacyLine = legacyLine;
  }

  Draw(x1: number, y1: number, x2: number, y2: number) {
    this.legacyLine.Draw(x1, y1, x2, y2);
  }
}
class LegacyRectangle {
  Draw(x1: number, y1: number, x2: number, y2: number) {
    console.log(`Drawing rectangle ${x1} ${y1} ${x2} ${y2}`);
  }
}
class LegacyLine {
  Draw(x1: number, y1: number, x2: number, y2: number) {
    console.log(`Drawing line ${x1} ${y1} ${x2} ${y2}`);
  }
}

interface IShape {
  Draw: (x1: number, y1: number, x2: number, y2: number) => void;
}
const shapes: IShape[] = [
  new LineAdapter(new LegacyLine()),
  new RectangleAdapter(new LegacyRectangle()),
];

const x1 = 5,
  y1 = 10,
  x2 = -3,
  y2 = 2;

shapes.forEach((shape) => shape.Draw(x1, y1, x2, y2));
