// Hoisting means variables' and functions' declarations are moved to the top of their scope at runtime or at the start of execution
// but behavior differs for let/const
// they are hoisted but not initialized
// so accessing them before declaration gives error

// var a=10;
// console.log(a);

// var is hoisted and initialized with undefined
console.log(a);
var a=10;  // hoisted to top of scope but undefined initially


// Let and const are hoisted but not initialized due to their entry in TDZ (Temporal Dead Zone)
// console.log(b);
let b=20;   // hoisted but not initialized due to TDZ (Temporal Dead Zone)

// console.log(c);
const c=30;  // hoisted but not initialized due to TDZ (Temporal Dead Zone)

// Functions (Declarations) are hoisted too  -- function declarations are fully hoisted -- no undefined issue like var or TDZ issue like let/const

foo();
function foo(){console.log("hoisted");}

// Function expressions are not hoisted
// bar(); // would give error
var bar = function(){console.log("not hoisted");}

// arrow functions are similar to function expressions

// baz(); // would give error
const baz = () => console.log("not hoisted");



// summary: var is hoisted with undefined, let/const are hoisted but gets in TDZ, named functions fully hoisted
// function expressions and arrow functions not hoisted




