console.log("Hello World");
// This is a simple JavaScript program that prints "Hello World" to the console. You can run this code in any JavaScript environment, such as a web browser's developer console or a Node.js environment.

// Javascript Definitions:
// 1. Variables: Used to store data values. In JavaScript, you can declare variables using var, let, or const.
// 2. Functions: Blocks of code designed to perform a particular task. Functions are executed when they are called.
// 3. Objects: Collections of properties, where each property is a key-value pair. Objects can represent real-world entities and their attributes.
// 4. Arrays: Ordered collections of values, which can be of any type. Arrays are used to store multiple values in a single variable.
// 5. Loops: Control structures that allow you to repeat a block of code multiple times. Common loops in JavaScript include for, while, and do...while loops.

// Javascript is a versatile programming language that is primarily used for web development. It allows developers to create interactive and dynamic web pages.
//  With the rise of frameworks and libraries like React, Angular, and Vue.js, JavaScript has become an essential tool for front-end development. 
// Additionally, with Node.js, JavaScript can also be used for server-side programming, making it a full-stack development language.

// JavaScript is an interpreted language, meaning that it does not require a compilation step before execution. This allows for rapid development and testing of code.
//  It is also a dynamically typed language, which means that variable types are determined at runtime, providing flexibility in coding but also requiring careful handling to avoid type-related errors.

// JavaScript has a rich ecosystem of libraries and frameworks that extend its capabilities. Popular libraries like jQuery simplify DOM manipulation, while frameworks like Express.js facilitate building web servers and APIs. Additionally, tools like Babel and Webpack help developers write modern JavaScript code and bundle it for production use.
// why Javascript
// 1. Versatility: JavaScript can be used for both front-end and back-end development, making it a versatile language for building web applications.
// 2. Community Support: JavaScript has a large and active community of developers, which means there are plenty of resources, tutorials, and libraries available for learning and development.
// 3. Performance: JavaScript is executed in the browser, allowing for fast and responsive user interfaces. With advancements like Just-In-Time (JIT) compilation, JavaScript performance has improved significantly over the years.
// 4. Integration: JavaScript can easily integrate with other technologies and APIs, making it a powerful tool for building complex web applications.
// 5. Continuous Evolution: The language continues to evolve with new features and improvements being added regularly through ECMAScript updates, ensuring that developers have access to modern programming capabilities.

// JS Variables and Data Types:
// In JavaScript, variables can hold different types of data. The main data types in JavaScript include:
// 1. Number: Represents numeric values, both integers and floating-point numbers. type is Number
// 2. String: Represents a sequence of characters, used for text data. type is String
// 3. Boolean: Represents a logical value, either true or false. type is Boolean
// 4. Undefined: Represents a variable that has been declared but not assigned a value. type is Undefined
// 5. Null: Represents the intentional absence of any object value. type is Object
// 6. Object: Represents a collection of key-value pairs. type is Object
// 7. Array: Represents an ordered collection of values, accessible by index. type is Object

// Difference between var, let, and const:
// 1. var: Declares a variable that is function-scoped or globally-scoped. Variables declared with var can be re-declared and updated within their scope.
// 2. let: Declares a block-scoped variable that can be updated but not re-declared within the same scope. It is introduced in ES6 and is preferred over var for most use cases.
// 3. const: Declares a block-scoped variable that cannot be updated or re-declared. It is used for values that should remain constant throughout the program.

// var a = 10; // Using var to declare a variable
// let b = 20; // Using let to declare a variable
// const c = 30; // Using const to declare a constant variable

var a=10;
{
    var a=20; // This 'a' is scoped to the function or global scope, not block scope
    console.log(a); // Outputs: 20
}
console.log(a); // Outputs: 20

let b=10;
{
    let b=20; // This 'b' is scoped to the block
    console.log(b); // Outputs: 20
}
console.log(b); // Outputs: 10

const c=10;
{
    const c=20; // This 'c' is scoped to the block
    // c=30; // This will throw an error because 'c' is a constant and cannot be reassigned
    console.log("Const ",c); // Outputs: 20
}
console.log("Const ",c); // Outputs: 10


console.log("JavaScript Hoisting:");
console.log(x); // Outputs: 5
var x = 5; // Variable 'x' is hoisted to the top of its scope, but its value is not assigned until this line is executed

// console.log("Y-let ",y); // Outputs: ReferenceError: Cannot access 'y' before initialization
let y = 10; // Variable 'y' is hoisted to the top of its block scope, but it is in a "temporal dead zone" until this line is executed

let z;
console.log("Z-let ",z); // Outputs: undefined