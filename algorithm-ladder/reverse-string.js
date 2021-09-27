/* Write a function that returns the reverse of a given string.

Input: “abcde”
Output: “edcba”
*/

const word = "hello";
const words = "Greetings From Mars!";

let reverse = (string) => string.split("").reverse().join("");
console.log(reverse(word));
console.log(reverse(words));
