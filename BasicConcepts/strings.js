// String Declaration
let str = "Hello"; // double quotes - static string
let str2 = 'World'; // single quotes - static string
let str3 = `!`;  // template literal - dynamic string - ES6 feature

// String concatenation
let result = str + " " + str2 + str3;
console.log(result);
// using template literal (we don't need + for concatenation and spaces)
console.log(`${str} ${str2}${str3}`); // template literal example


// Escape Characters
let str4 = "He said \"Hello\""; // using \" to escape double quotes
console.log(str4);
let str5 = 'It\'s fine'; // using \' to escape single quote
console.log(str5);
// using template literal with escape
let str6 = "He said \"Hi\"";
console.log(str6);
console.log("New line\nexample");
console.log("Tab\texample");
console.log("Backslash\\example");
console.log("Quote\"example");

// Dynamic string with template literal
let name = "Alice";
console.log(`Hello, ${name}`);
let age = 25;
console.log(`Age: ${age}`);
console.log(`Next year: ${age + 1}`);
console.log(`Name: ${name}`);

console.log(`Name and age: ${name}, ${age}`);