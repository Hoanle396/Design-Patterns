export interface Shape {
  draw: () => void;
}

export class Rectangle implements Shape {
  draw() {
    console.log("Shape: Rectangle");
  }
}

export class Circle implements Shape {
  draw() {
    console.log("Shape: Circle");
  }
}

export abstract class ShapeDecorator implements Shape {
  decoratedShape: Shape;

  constructor(decoratedShape: Shape) {
    this.decoratedShape = decoratedShape;
  }

  draw() {
    this.decoratedShape.draw();
  }
}

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
