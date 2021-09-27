/* Given a string, write a function that returns the first occurence 
of two duplicate characters in a row, and return the duplicated character.

Input: "abcdefghhijkkloooop"
Output: “h”
*/

const input = "abcdddefghhhijkloooooop";

let findDuplicate = (string) => {
  for (i = 0; i < input.length; i++) {
    let char = input.split("")[i];
    let nextChar = input.split("")[i + 1];
    var duplicate = "";

    if (char == nextChar) {
      duplicate = nextChar;
      return duplicate;
    }
  }
};

console.log(findDuplicate(input));
