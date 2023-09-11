import { Rectangle } from './Rectangle';
import { RedShapeDecorator } from './RedShapeDecorator';
import { Circle } from './Cricle';

const circle = new Circle();

const redCircle = new RedShapeDecorator(new Circle());

const redRectangle = new RedShapeDecorator(new Rectangle());
console.log("Circle with normal border");
circle.draw();

console.log("\nCircle of red border");
redCircle.draw();

console.log("\nRectangle of red border");
redRectangle.draw();
