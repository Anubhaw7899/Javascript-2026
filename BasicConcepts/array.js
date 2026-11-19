// Array Definition - Array is a variable that can hold multiple values
let arr = [1,2,3];
console.log("Basic Array");
console.log(arr); // [1,2,3]
console.log(arr[0]); // 1
console.log(arr.length); // 3
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // undefined
console.log(arr[arr.length-1]); // 3
// change array element
arr[0] = 10;
console.log(arr); // [10,2,3]
arr[3] = 5;
console.log(arr); // [10,2,3,5]

arr[5] = 7;
console.log(arr); // [10,2,3,5,undefined,7]

// array methods
console.log("Array Methods");
let fruits = ["apple","banana"];
// push element to array in the end
fruits.push("orange");  
console.log(fruits);
// pop last element from array
// fruits.pop();
// console.log(fruits);    

let fruits2 = [];
fruits2.push("grape","melon","berry");
console.log(fruits2);
// shift removes first element
fruits2.shift();
console.log(fruits2);
console.log(fruits2.length);

// unshift adds element to start
fruits2.unshift("mango","kiwi");
console.log(fruits2);
console.log(fruits2[0]);
console.log(fruits2.length);

