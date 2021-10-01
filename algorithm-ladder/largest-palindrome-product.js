/* A palindromic number reads the same both ways. The largest palindrome made 
from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

// THIS NEEDS TO BE REFACTORED - DOESN'T GIVE HIGHEST PALINDROMIC PRODUCT OF 913 * 993 = 906609

var largestPalindrome = 0;

const num1 = 999;
const num2 = 999;

let palindromeFinder = (num1, num2) => {
  for (i = 1; i < 999; i++) {
    if (num1 * num2 == (num1 * num2).toString().split("").reverse().join("") && num1 * num2 > largestPalindrome) {
      largestPalindrome = num1 * num2;
      console.log(`${largestPalindrome} is the product of ${num1} * ${num2}.`);
      num1 -= 1;
      num2 -= 1;
    } else {
      num1 -= 1;
      num2 -= 1;
    }
  }

  for (i = 1; i < 999; i++) {
    num1 = 999;
    if (num1 * num2 == (num1 * num2).toString().split("").reverse().join("")) {
      if (num1 * num2 > largestPalindrome) {
        largestPalindrome = num1 * num2;
        console.log(`${largestPalindrome} is the product of ${num1} * ${num2}.`);
      } else {
        break;
      }
      num1 -= 1;
    } else {
      num1 -= 1;
    }
  }

  return `The largest palindrome is ${largestPalindrome}.`;
};

console.log(palindromeFinder(999, 999));
