// FOR LOOP
// initialisation; continue condition; iteration.
for (var i = 0; i < 5; i++) {
  // will run 5 times
}

// ======================================================

// .MAP
const characters = [
      {
        name: "Luke Skywalker",
        height: 172,
        mass: 77,
        eye_color: "blue",
        gender: "male",
      },
      {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        eye_color: "yellow",
        gender: "male",
      },
      {
        name: "Leia Organa",
        height: 150,
        mass: 49,
        eye_color: "brown",
        gender: "female",
      },
      {
        name: "Anakin Skywalker",
        height: 188,
        mass: 84,
        eye_color: "blue",
        gender: "male",
      },
    ];

const names = characters.map((character) => character.name);
console.log(names);

// ======================================================

// OBJECTS
// Objects can even contain functions (called methods)
// When functions attached to an object are called, they can access the object
// they're attached to using the `this` keyword.
var myObj = {
  name: "Destiny's Child",
  sayMyName: function () {
    console.log(this.name);
  },
};
myObj.sayMyName(); // outputs "Destiny's Child"

// Object attributes can also be accessed using the subscript syntax,
myObj["my other key"]; // = 4

// ... or using the dot syntax, provided the key is a valid identifier.
myObj.myKey; // = "myValue"

// Objects are mutable; values can be changed and new keys added.
myObj.myThirdKey = true;

// If you try to access a value that's not yet set, you'll get undefined.
myObj.myFourthKey; // = undefined

// iterating through objects
for(var property in myObj) { // do something }

    // JSON (JavaScript Object Notation) is just a special case of Object literal notation
    // where the keys are strings wrapped in quotes
    var json_stuff = {
      "firstName": "John",
      "lastName": "Doe",
      "Age": 25
    }
    
    // JS Object => JSON
    JSON.stringify(myObj);
    
    // JSON => JS Object
    JSON.parse(json_stuff);

// ======================================================

// FUNCTIONS
// JavaScript functions are declared with the `function` keyword.
// This is a function statement
function myFunction(thing){
    return thing.toUpperCase();
}

// This is a function expression
var makeUpperCase = function() {
    return think.toUpperCase();
}