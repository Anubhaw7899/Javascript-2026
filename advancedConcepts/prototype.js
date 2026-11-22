// Example of prototype usage

// prototype is an object that other objects inherit from

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {  //Person's properties are inherited into this function
  console.log("Hello, " + this.name);
};
const person1 = new Person("Alice");
person1.greet();

// person1 inherits greet from Person.prototype

// Prototype chaining - child inherits from parent



const animal = {
  eat:true
};
const dog={
    barks:true
}
dog.__proto__ = animal; //dog is the child of animal
console.log(dog.eat);  // true
console.log(dog.barks);  // true

// difference between Prototype and __proto__
// Prototype is on the constructor, __proto__ is on the instance
console.log(dog.__proto__); // animal object
console.log(dog.__proto__.__proto__); // null

