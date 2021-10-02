/* Given ONE array of strings, return a new array that contains every 
combination of each string with every other string in the array.

Input: ["a", "b", "c", "d"]
Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

*/

const array = ["a", "b", "c", "d"];

let combiner = (array) => {
  let arrayCombos = [];
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[i] !== array[j]) {
        arrayCombos.push(array[i] + array[j]);
      }
    }
  }
  return arrayCombos;
};

console.log(combiner(array));
