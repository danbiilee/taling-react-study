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

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);

function returnNothing(): void {
  console.log('void function');
}

// interface
interface Shape {
  getArea(): number; // Shape interface에는 getArea 함수가 꼭 있어야 함!
}

class Circle implements Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
