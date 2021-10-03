/* Given an array of numbers, return a new array containing just two numbers 
(from the original array) that add up to the number 10. If there are no two 
numbers that add up to 10, return false.

Specifically use *nested loops* to solve this exercise even though there are 
other approaches as well.

Input: [2, 5, 3, 1, 0, 7, 11]
Output: [3, 7]

Input: [1, 2, 3, 4, 5]
Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just 
one pair of numbers.)
*/

const array1 = [3, 5, 2, 1, 0, 11, 7];
const array2 = [1, 2, 3, 4, 5];

let findSum = (array) => {
  let sumArray = [];
  for (i = 0; i < array.length - 1; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (i == j || sumArray.length == 2) {
        j++;
      } else if (array[i] + array[j] == 10) {
        sumArray.push(array[i], array[j]);
      }
    }
  }
  if (sumArray.length == 2) {
    return sumArray;
  } else {
    return false;
  }
};

console.log(findSum(array1));
console.log(findSum(array2));