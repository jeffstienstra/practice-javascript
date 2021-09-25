/* Write a function that returns the greatest value from an array of numbers.

Input: [5, 17, -4, 20, 12]
Output: 20
*/

const numbers = [5, 17, -4, 20, 20, 12, -100000];

let maxNumber = (array) => {
  let max = Math.max(...numbers);
  return max;
};

console.log(maxNumber(numbers));
