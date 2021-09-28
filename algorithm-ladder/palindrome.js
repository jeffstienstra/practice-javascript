/* Given a string, write a function that returns true if it is a palindrome, 
and false if it is not. (A palindrome is a word that reads the same both 
forward and backward.)

Input: “racecar”
Output: true

Input: “baloney”
Output: false
*/

const input1 = "racecar";
const input2 = "I wish I was a palindrome";

// initial solution
// let palindromeDetector = (string) => {
//   if (string == string.split("").reverse().join("")) {
//     return `True! "${string}" is a palindrome!`;
//   } else {
//     return `False, "${string}" is not a palindrome.`;
//   }
// };

// ===== REFACTORED SOLUTION =====
let palindromeDetector = (string) => (string == string.split("").reverse().join("") ? true : false);

console.log(palindromeDetector(input1));
console.log(palindromeDetector(input2));
