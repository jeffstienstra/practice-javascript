/* Write a function that accepts an array of numbers and returns 
the product of all the numbers.

Input: [1, 2, 3, 4]
Output: 24 

Explanation: (1 x 2 x 3 x 4) = 24
*/

const numbers = [1, 2, 3, 4];

let product = (array) => {
  let currentProduct = array.reduce((acc, cur) => {
    acc = cur * acc;
    return acc;
  }, 1);
  return currentProduct;
};

console.log(product(numbers));
