let num1 : number = 9
let num2: number = 9
/* Method 1 */
function addNumber (num1, num2) { 
   return num1 + num2;
};
console.log(addNumber(num1, num2))
/* Method 2 */
const no1 = 5
const no2 = 15
function calculate (no1 : number, no2: number) { 
   return no1 + no2;
};
console.log(calculate(no1, no2))

function getTotal(numbers : number[]) {
   return numbers.reduce((accum, item) => {
      return accum + item
   }, 0);
}
console.log(getTotal([1, 3, 6]))


function getTotal1(numbers : Array<number>) {
   return numbers.reduce((accum, item) => {
      return accum + item
   }, 0);
}
console.log(getTotal1([1,3,6]))