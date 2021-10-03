/* Find the largest product of any two numbers within a given array.

Input: [5, -2, 1, -9, -7, 2, 6]
Output: 63 (-9 * -7)
*/

array = [5, -2, 1, -9, -7, 2, 6];

let findLargestProduct = (array) => {
  let largestProduct = null;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (i == j) {
        j += 1;
      } else if (array[i] * array[j] > largestProduct) {
        largestProduct = array[i] * array[j];
      }
    }
  }
  return largestProduct;
};

console.log(findLargestProduct(array));
