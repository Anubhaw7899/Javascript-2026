// JS has primitive and reference data types
// Primitive: number, string, boolean, null, undefined, symbol
// Reference: objects, arrays, functions
// Primitive are copied by value, reference are copied by reference
// Example:
let x = 5;
let y = x;
y = 10;
console.log(x); // 5
// Reference example
let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 2;
console.log(obj1.a); // 2
console.log(obj2.a); // 2
// changing obj2 affects obj1 too

// Primitive copy doesn't affect original
let m = 5;
let n = m;
n = 20;
console.log(m); // 5
console.log(n); // 20


// Data Types examples
let str = "Hello";
console.log("String's type", typeof str);

let arr = [1, 2, 3];
console.log("Array's type", typeof arr);
let func = function () { return 1; };
console.log("Function's type", typeof func);
console.log("Null type", typeof null);
let und;
console.log("Undefined type", typeof und);
console.log("Symbol type", typeof Symbol());
console.log("Object type", typeof {});
console.log("Array is object?", Array.isArray(arr));
console.log("Null is object?", typeof null === "object");
console.log("Undefined is undefined ? ", typeof undefined === "undefined");
