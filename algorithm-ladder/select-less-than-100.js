//PROBLEM:
/*Given an array of numbers, write a function that returns a new array that 
contains all numbers from the original array that are less than 100.

Input: [99, 101, 88, 4, 2000, 50]
Output: [99, 88, 4, 50]
*/

// initial approach
// const numbers = [99, 101, 88, 4, 2000, 50];
// var lessThan100 = [];

// const findLessThan100 = (array) => {
//   for (i = 0; i < array.length; i++) {
//     num = array[i];
//     num < 100 ? lessThan100.push(num) : false;
//   }
//   return lessThan100;
// };

// ===== Refactored Version =====
const numbers = [99, 101, 88, 4, 2000, 50, -101, 100];

let findLessThan100 = (array) => {
  let lessThan100 = array.reduce((acc, num) => {
    num < 100 ? acc.push(num) : false;
    return acc;
  }, []);
  return lessThan100;
};

console.log(findLessThan100(numbers));
