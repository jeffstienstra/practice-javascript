/* Given two arrays of strings, return a new string that contains every 
combination of a string from the first array concatenated with a string 
from the second array.

Input: ["a", "b", "c"], ["d", "e", "f", "g"]
Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

*/

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f", "g"];

let stringCombiner = (array1, aray2) => {
  let newArray = [];
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      newArray.push(array1[i] + array2[j]);
    }
  }
  return newArray;
};

console.log(stringCombiner(array1, array2));
