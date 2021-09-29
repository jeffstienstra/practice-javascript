/* Given a string of words, write a function that returns a new string that 
contains the words in reverse order.

Input: “popcorn is so cool isn’t it yeah i thought so”
Output: “so thought i yeah it isn’t cool so is popcorn”
*/

const string1 = "popcorn is so cool isn’t it yeah i thought so";
const string2 = "I don’t lose things I place things in locations which later elude me";

let reverser = (string) => string.split(" ").reverse().join(" ");

console.log(reverser(string1));
console.log(reverser(string2));
