/* Given a string, write a function that returns a copy of 
the original string that has every other character capitalized. 
(Capitalization should begin with the second character.)

Input: “hello, how are your porcupines today?”
Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”
*/

const phrase1 = "hello, how are your porcupines today?";
const phrase2 = "hello, how are your 25340 porcupines today?";

// initial solution - doesn't include trailing characters of odd numbered strings
// let caps = (string) => {
//   let editedString = "";
//   for (i = 1; i < string.length; i += 2) {
//     editedString = editedString + string.split("")[i - 1] + string.split("")[i].toUpperCase();
//   }
//   return editedString;
// };

// ===== REFACTORED SOLUTION =====
function firstLetterUppercase(input) {
  var output = "";
  for (i = 0; i < input.length; i++) {
    output += i % 2 == 0 ? input.charAt(i) : input.charAt(i).toUpperCase();
  }
  return output;
}

console.log(firstLetterUppercase(phrase1));
console.log(firstLetterUppercase(phrase2));
