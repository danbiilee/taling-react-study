"use strict";
/*

const message: string = 'hello world';

let count = 0;
count += 1;
count = 'string?'; // 에러

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];
messages.push(1); // 에러

let mightBeUndefined: string | undefined = undefined; // string일 수도 undefined일 수도 있음
let nullableNumber: number | null = null; // number일 수도 null일 수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나
color = 'yellow';
color = 'green'; // 에러

*/
/*

function sum(x: number, y:number): number {
    //return x + y;
    return null; // 에러
}
sum(); // 에러

*/
function sumArray(numbers) {
    return numbers.reduce(function (acc, cur) { return acc + cur; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log('void function');
}
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
