/* Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

Input: “i hate $ but i love money i know i know im crazy”
Output: true

Input: “abcdefghijklmnopqrstuvwxyz”
Output: false
*/

const phrase1 = "i hate $ but i love money i know i know im crazy";
const phrase2 = "i hate money!@#%^&*(), but i love money i know i know im crazy";

let findTheDolla = (char) => (char.match(/\$/) ? true : false);

console.log(findTheDolla(phrase1));
console.log(findTheDolla(phrase2));
