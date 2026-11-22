// 'this' refers to the object calling the function

// "use strict";
console.log(this); // this is the global object (gives empty object in node and window object in browser)

// function showThis() {
//   console.log(this);  // global object in non-strict mode
// }
// showThis(); // global object

// "use strict"; // strict mode, this is undefined in functions
function strictThis() {
  console.log(this); // undefined in strict mode
}
strictThis();

const obj = {
  name: "Alice",
  greet: function() {
    console.log(this.name);
  }
};
obj.greet(); // Alice
// obj={name:"Bob"}  //gives error because obj is const
obj.name = "Bob"  // works because we are changing property, not reassigning object
console.log(obj.name);

// this with arrow functions
const arrowObj = {
  name: "Charlie",
  greet: () => {
    console.log(this.name);  // undefined
  }
};
arrowObj.greet(); // undefined because arrow uses lexical this

// arrow functions don't have their own this, they use surrounding this
// here surrounding is global, so undefined

// if we use normal function, this would refer to arrowObj
// like greet: function() { console.log(this.name); }

// lexical this for arrow functions is the surrounding context

const arroObj2 = {
  name: "Dave",
  greet() {
    console.log(this.name);
    const inner = () => console.log(this.name);
    inner();
  }
};
arroObj2.greet();

const arrowObj3 = {
  name: "Eve",
  greet: function() {
        function inner() {
            console.log(this.name);
        }
        inner();
   }
};
arrowObj3.greet();  //undefined because inner is normal function and inner function does not receive arrowObj3 as this.

// A regular function gets this from its call site.
//  Since inner() is not called as someObject.inner(), it does not receive arrowObj3 as this.

// this inside inner usually becomes the global object. Since the global object normally has no name property, the result is: undefined

// That's why arrow functions are useful for keeping this from the surrounding context.

// In this case, inner() is a plain function call.
// r It does not inherit this from greet; its this is undefined, so accessing this.name causes an error.

// That is why arrow functions are useful for callbacks and nested functions: they preserve the surrounding method's this.