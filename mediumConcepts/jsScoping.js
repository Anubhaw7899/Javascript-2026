// JS scoping rules: var, let, const
// scope means where a variable is accessible in the code

// Global scope, local scope, block scope

// Global Scope - accessible everywhere
var globalVar = "I am global";  
console.log(globalVar);

function test() {
    console.log(globalVar);
}
test();

// Local scope example - only inside function
function localTest() {
    var localVar = "I am local";
    console.log(localVar);
}
localTest();
// console.log(localVar); // error, not accessible here

// Block scope example -- applies to let/const
{
    let blockVar = "I am block scoped";
    console.log(blockVar);
}
// console.log(blockVar); // error, not accessible here