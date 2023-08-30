import { ShapeDecorator } from "./ShapeDecorator";
import { Shape } from "./Shape";

export class RedShapeDecorator extends ShapeDecorator {
  constructor(decoratedShape: Shape) {
    super(decoratedShape);
  }

  draw() {
    this.decoratedShape.draw();
    this.setRedBorder(this.decoratedShape);
  }

  setRedBorder(decoratedShape: Shape) {
    console.log("Border Color: Red");
  }
}
