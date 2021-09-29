/* Write a function that prints out every number from 1 to N, 
with the following exceptions:

If the number is divisible by 3, print out "FIZZ".
If the number is divisible by 5, print out "BUZZ".
If the number is divisible by both 3 and 5, print out "FIZZBUZZ".
*/

const number = 44;

let fizzBuzz = (num) => {
  var numbers = [];
  for (i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      numbers.push("FIZZBUZZ");
    } else if (i % 3 == 0) {
      numbers.push("FIZZ");
    } else if (i % 5 == 0) {
      numbers.push("BUZZ");
    } else {
      numbers.push(i);
    }
  }
  return numbers;
};

console.log(fizzBuzz(number));
