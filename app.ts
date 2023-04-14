// Type Annotataion
let fullName: string = "Sanjeev Ranjan"
fullName = "Sanv Ran"

let age: number = 25
age = 26

const myArr: string[] = []
myArr.push("Elcome");

// Tuple
let myAddress: [number, string, number]
myAddress = [1, 'hello', 22]

let person: { name: string }
// person = {name: "Sanjeev", age: 26}
person = { name: "Sanjeev" }

let anotherPerson: { name: string, age?: number } // due to optinal
anotherPerson = { name: "Sanjeev", age: 26 } // valid
anotherPerson = { name: "Sanjeev" }  // Valid

function sum(a: string, b?: string) {
   return a + b
};
console.log("sum==>", sum('3'));

function add(a: string, b?: string) {
   return b ? a+b : a
};
console.log("add==>", add('3'));



let num1: number = 9
let num2: number = 9
/* Method 1 */
function addNumber(num1, num2) {
   return num1 + num2;
};
console.log(addNumber(num1, num2))
/* Method 2 */
const no1 = 5
const no2 = 15
function calculate(no1: number, no2: number) {
   return no1 + no2;
};
console.log(calculate(no1, no2))

function getTotal(numbers: number[]) {
   return numbers.reduce((accum, item) => {
      return accum + item
   }, 0);
}
console.log(getTotal([1, 3, 6]))


function getTotal1(numbers: Array<number>) {
   return numbers.reduce((accum, item) => {
      return accum + item
   }, 0);
}
console.log(getTotal1([1, 3, 6]))