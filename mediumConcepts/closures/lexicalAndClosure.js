// Lexical scope is determined by where variables and functions are written in the source code.
// A nested function can access variables from its enclosing scope.

// A Lexical scope is defined 

function outer(){
    let name=`Mohit Decodes`;
    function inner(){
        console.log("Name value in inner function is ",name);
    }
    console.log("Name value in outer function is ",name);
    inner();
}
outer();

// Closure - A closure is created when a function remembers and can access variables from its lexical (outer) scope,
//  even after the outer function has finished executing.

function greet(name){
    return function(){
        console.log("Hello", name);
    }
}
const greetMohit = greet("Mohit"); //outer function's execution has been finished
greetMohit();   // inner function(which is returned and assigned to greetMohit) still remembers and can access variable from its outer scope
