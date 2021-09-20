// var words = ["quick", "brown", "fox"];
// words.push("jumps");
// words.push("over");
// console.log(words);

// var numbers = [4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// var cities = ["Chicago", "New York", "Grand Rapids"];
// let i = 0;
// while (i < cities.length) {
//   if (cities[i].length > 8) {
//     console.log(cities[i]);
//   }
//   i++;
// }

// var countries = ["Argentina", "Canada", "Guam"];
// countries.push("USA");
// console.log(countries);

//==============================================================

// Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

// var fruits = { watermellon: "red", lemon: "yellow", lime: "green" };
// fruits["tomato"] = "reddish";

// var toys = { perler_beads: "plastic", he_man: "also plastic", gi_joe: "very plastic" };
// toys["barbie"] = "completely plastic";
// console.log(toys);

//==============================================================

// Given an array of numbers, write a function that returns a new array that
// contains all numbers from the original array that are less than 100.

// Input: [99, 101, 88, 4, 2000, 50]
// Output: [99, 88, 4, 50]

// var numbers = [99, 101, 88, 4, 2000, 50];
// const smallNumbers = [];

// function lessThanOneHundred(array) {
//   array.map((num) => {
//     if (num < 100) {
//       smallNumbers.push(num);
//     }
//   });
//   return smallNumbers;
// }

// console.log(lessThanOneHundred(numbers));

//==============================================================

// const characters = [
//   {
//     name: "Luke Skywalker",
//     height: 172,
//     mass: 77,
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: 202,
//     mass: 136,
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: 150,
//     mass: 49,
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: 188,
//     mass: 84,
//     eye_color: "blue",
//     gender: "male",
//   },
// ];

// //***MAP***
// //1. Get array of all names
// const names = characters.map((character) => character.name);
// // console.log(names);
// //2. Get array of all heights
// const heights = characters.map((character) => character.height);
// // console.log(heights);
// //3. Get array of objects with just name and height properties
// const minifiedCharacters = characters.map((character) => ({
//   name: character.name,
//   height: character.height,
// }));
// // console.log(minifiedCharacters);
// //4. Get array of all first names
// const firstNames = characters.map((character) => character.name.split(" ")[0]);
// // console.log(firstNames);

// //5. Tallest character's name and height
// // const tallest = {
// //   name: null,
// //   height: null,
// // };
// // const tallestCharacter = characters.map((character) => {
// //   if ((tallest.name = null)) {
// //     tallest.name = character.name;
// //     tallest.height = character.height;
// //   }
// //   if (Number(tallest.height) < Number(character.height)) {
// //     tallest.name = character.name;
// //     tallest.height = character.height;
// //   }

// //   console.log("current character:", character);
// //   console.log("");
// //   console.log("current tallest", tallest);
// //   console.log("");
// // });

// // console.log("The tallest character is", tallest);

// //***REDUCE***
// //1. Get total mass of all characters
// const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
// console.log(totalMass);
// //2. Get total height of all characters
// const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
// console.log(totalHeight);
// //3. Get total number of characters by eye color
// const charactersByEyeColor = characters.reduce((acc, cur) => {
//   const color = cur.eye_color;
//   if (acc[color]) {
//     acc[color]++;
//   } else {
//     acc[color] = 1;
//   }
//   return acc;
// }, {});
// console.log(charactersByEyeColor);
// //4. Get total number of characters in all the character names
// const totalLetters = characters.reduce((acc, cur) => acc + cur.name.length, 0);
// console.log(totalLetters);

// //***FILTER***
// //1. Get characters with mass greater than 100
// //2. Get characters with height less than 200
// //3. Get all male characters
// //4. Get all female characters

// //***SORT***
// //1. Sort by mass
// //2. Sort by height
// //3. Sort by name
// //4. Sort by gender

// //***EVERY***
// //1. Does every character have blue eyes?
// //2. Does every character have mass more than 40?
// //3. Is every character shorter than 200?
// //4. Is every character male?

// //***SOME***
// //1. Is there at least one male character?
// //2. Is there at least one character with blue eyes?
// //3. Is there at least one character taller than 210?
// //4. Is there at least one character that has mass less than 50?

//==============================================================

// write a JS program to check two numbers and return true if one of the
// numbers is 100 or if the sum of teh two numbers is 100

// function isEqualTo100(num1, num2) {
//   if (num1 == 100 || num2 == 100) {
//     console.log("if statement ran");
//   } else if (num1 + num2 == 100) {
//     console.log("else if statement ran");
//   } else {
//     console.log("else statement ran");
//   }
// }
//  \/ can be shortened like this \/
// const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

// console.log(isEqualTo100(20, 80));

//==============================================================

// write a JS program to get the extension of a filename
// const filename = "test.example.pdf";

// const extension = filename.split(".");
// console.log(`This file is of type '${extension[extension.length - 1]}'`);
//  \/ can be shortened as \/
// const getFileExtension = (str) => str.slice(str.lastIndexOf("."));
// console.log(getFileExtension("test.example.html"));

//==============================================================

// write a JS program to replace every character in a given string with the character
// following it in the alphabet

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("")
    .replace(/{/g, "a");

console.log(moveCharsForward("jazz"));

// let i;
// for (i = 0; i < moveCharsForward.length; i++) {
//   console.log(moveCharsForward[i]);
//   if (moveCharsForward[i] === "{") {
//     moveCharsForward.splice(moveCharsForward[i], 1, "a");
//     console.log("found a {");
//   }
//   console.log(moveCharsForward);
// }

// console.log(moveCharsForward);

//==============================================================
// const numbers = ["{", 1, 2, 3, 4];

// let i;
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] === "{") {
//     numbers.splice(numbers[i], 1, "a");
//     console.log("found a 0");
//   } else {
//     console.log("no zeros found");
//   }
//   console.log(numbers);
// }
