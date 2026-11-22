// JS interview questions
// Example: difference between == and ===
let x = 5;
let y = "5";
console.log(x == y); // true
console.log(x === y); // false
// Example: typeof
console.log(typeof x); // number
console.log(typeof y); // string
// Example: NaN
console.log(NaN === NaN); // false // NaN produces a numeric value which is not equal to anyting, even itself
console.log(isNaN(NaN)); // true

// Example: undefined
let z;
console.log(z); // undefined
console.log(typeof z); // undefined
console.log(z === undefined); // true
// Example: null
let n = null;
console.log(n); // null
console.log(typeof n); // object
console.log(n === null); // true
// Example: array
let arr = [1,2,3];
console.log(Array.isArray(arr)); // true
console.log(arr.length); // 3
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // undefined
console.log(arr[-1]); // undefined
console.log(arr.at(-1)); // 3
console.log(arr.at(0)); // 1
console.log(arr.includes(2)); // true
console.log(arr.includes(4)); // false
console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(4)); // -1
console.log(arr.join(',')); // 1,2,3
console.log(arr.slice(1)); // [2,3]
console.log(arr.slice(0,2)); // [1,2]
console.log(arr.concat([4,5])); // [1,2,3,4,5]
console.log(arr.reverse()); // [3,2,1]
console.log(arr.pop()); // 1
console.log(arr); // [3,2]
console.log(arr.shift()); // 3
console.log(arr); // [2]
console.log(arr.unshift(1)); // 2
console.log(arr); // [1,2]
console.log(arr.push(3)); // 3  
console.log(arr); // [1,2,3]
console.log(arr.slice(-2)); // [2,3]
console.log(arr.slice(-1)); // [3]

// let var const - interview question example
console.log(a); // undefined before declaration
var a =2;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization  - TDZ
let b;

// console.log(c); // ReferenceError: Cannot access 'c' before initialization  - TDZ
const c = 3;

// String Concatenation
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // Hello World
console.log(`${str1} ${str2}`); // Hello World
console.log(str1.concat(" ", str2)); // Hello World
// string in next line
console.log("Hello \
World"); // Hello World 
// template literal for new line
console.log(`Hello
World`); // Hello   __new line__   World
