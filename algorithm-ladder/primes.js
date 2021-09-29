// Write a function that returns whether a given number is a prime number.

const number1 = 44;
const number2 = 257;
const number3 = -257;

let primeFinder = (num) => {
  var isPrime = null;
  num % 2 == 0 || num % 3 == 0 || num % 5 == 0 ? (isPrime = false) : (isPrime = true);
  return isPrime;
};

console.log(primeFinder(number1));
console.log(primeFinder(number2));
console.log(primeFinder(number3));
