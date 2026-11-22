// Function :- A function is a block of reusable code designed to perform a particular task
// it is a clean code, modular code and avoids repetition

// function declaration example   -- named function allows hoisting
console.log("Testing Function declaration");
console.log(greet("Alice"));
function greet(name) {
    return `Hello, ${name}`;
}

console.log(greet("Alice"));
console.log(greet("Bob"));


// Function expression example   -- not hoisted
// console.log(greet2("Charlie"));  //Cannot access 'greet2' before initialization
console.log("Testing Function expression");
let greet2 = function (name) {
    return `Hello, ${name}`;
};
console.log(greet2("Charlie"));

// Arrow function example   -- ES6 feature  -- shorter syntax  -- No hoisting  -- good for callbacks


console.log("Testing Arrow fns");
let greet3 = (name) => {
    return `Hello, ${name}`;
}
console.log(greet3("Dave"));

// concise arrow function
let greet4 = name => `Hello, ${name}`;
console.log(greet4("Eve"));
