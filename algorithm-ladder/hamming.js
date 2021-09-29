/* Given two strings of equal length, write a function that returns 
the number of characters that are different between the two strings.

Input: "ABCDEFG", "ABCXEOG"
Output: 2

Explanation: While the A, B, C, E, and G are in the same place for 
both strings, they have different characters in the other spaces. 
Since there are 2 such spaces that are different (the D and F in the
first string), we return 2.

Input: "ABCDEFG", "ABCDEFG",
Output: 0
*/

const string1 = "ABCDEFG";
const string2 = "ADCBEGG";
const string3 = "ABCDEFG";

// ===== REFACTORED SOLUTION =====
let stringMatcher = (string1, string2) => {
  var counter = 0;
  for (i = 0; i < string1.length; i++) {
    string1.split("")[i] !== string2.split("")[i] ? (counter = counter += 1) : (counter += 0);
  }
  return counter;
};

console.log(stringMatcher(string1, string2));
console.log(stringMatcher(string1, string3));
