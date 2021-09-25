/* Given an array of numbers, write a function that returns a new array 
whose values are the original array’s value doubled.

Input: [4, 2, 5, 99, -4];
Output: [8, 4, 10, 198, -8];
*/

const numbers = [4, 2, 5, 99, -4];
var doubledNumbers = [];

let doubler = (array) => {
  array.map((num) => {
    doubledNumbers.push(num * 2);
  });
  return doubledNumbers;
};
console.log(doubler(numbers));
