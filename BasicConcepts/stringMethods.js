// String methods examples

// length of string
console.log("Testing length");

let str = "Hello";
console.log(str.length); // 5

// convert to upper case and lower case
console.log("Testing case");

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// character at index
console.log("Testing charAt");

console.log(str.charAt(0)); // H
console.log(str.charAt(3)); // l

// index of character
console.log("Testing indexOf");

console.log(str.indexOf("H")); // 0
console.log(str.indexOf("z")); // -1
console.log(str.indexOf("o")); // 4

// last index of character
console.log("Testing lastIndexOf");

console.log(str.lastIndexOf("l")); // 3
console.log(str.lastIndexOf("H")); // 0
console.log(str.lastIndexOf("z")); // -1


// includes
console.log("Testing includes");

console.log(str.includes("H")); // true
console.log(str.includes("h")); // false
console.log(str.includes("o")); // true

let str1 = "Hello Anubhaw";
console.log(str1.includes("Anu")); // true
console.log(str1.includes("Anubhaw")); // true
console.log(str1.includes("Hello")); // true
console.log(str1.includes("Bye")); // false

// slice vs substring
console.log("Testing slice vs substring");

console.log(str1.slice(0,5)); // Hello
console.log(str1.substring(0,5)); // Hello
console.log(str1.slice(6)); // Anubhaw
console.log(str1.substring(6)); // Anubhaw
console.log(str1.slice(-7)); // Anubhaw
console.log(str1.substring(-6)); // Hello Anubhaw

console.log(str1.slice(0,-9)); // Hell

// slice is recommended to use over substring for negative indices
// substring ignores negative indices
console.log(str1.substring(0,-9)); // Hello Anubhaw

// replace method example
console.log("Testing replace");
console.log(str1.replace("Anubhaw", "User")); // Hello User
console.log(str1.replace("Hello", "Hi")); // Hi Anubhaw
console.log(str1.replace("Bye", "Not Replacable")); // Hello Anubhaw

// split method - is used to split string into array
console.log("Testing split");
console.log(str1.split(" ")); // ["Hello", "Anubhaw"]
let str2="HTML,CSS,JS";
console.log(str2.split(",")); // ["HTML", "CSS", "JS"]

console.log(str2.split("")); // ["H", "T", "M", "L", ",", "C", "S", "S", ",", "J", "S"]

console.log(str2.split("CSS")); // ["HTML,", ",JS"]

// split with string not found returns whole string in array
console.log(str2.split("Python")); // ["HTML,CSS,JS"]

// join array into string
console.log("Testing join");
console.log(str2.split(",").join("-")); // HTML-CSS-JS
console.log(str2.split(",").join(" ")); // HTML CSS JS
console.log(str2.split(",").join("")); // HTMLCSSJS

console.log(["a","b"].join("-")); // a-b
console.log(["a","b"].join("")); // ab

// trim method - removes whitespace from both ends
console.log("Testing trim");
console.log("   Hello   ".trim()); // Hello
console.log("  Test  ".trim()); // Test
console.log("  JS  ".trim()); // JS


// string concatenation with concat
console.log("Hello".concat(" World")); // Hello World
console.log("Hi".concat(" There")); // Hi There
console.log("Bye".concat(" Now")); // Bye Now
console.log("Hello".concat(" Again")); // Hello Again
console.log("Hi".concat(" Again")); // Hi Again