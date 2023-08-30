import { Shape } from "./Shape";

export abstract class ShapeDecorator implements Shape {
  decoratedShape: Shape;

  constructor(decoratedShape: Shape) {
    this.decoratedShape = decoratedShape;
  }

  draw() {
    this.decoratedShape.draw();
  }
}