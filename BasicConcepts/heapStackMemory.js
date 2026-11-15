// Stack and Heap memory in JS
// Stack stores primitive values
// Heap stores objects and arrays

// Example of stack copy
// changing b won't affect a
let a=10;
let b=a;
b=20;
console.log("a remains unchanged after it is getting copied to a variable",a);
console.log(b);

// Example of heap reference
let obj1={name:"Test1"};
let obj2=obj1;
obj2.name="Test2";
console.log("obj1",obj1.name);
console.log("obj2",obj2.name);
// both show Test2 because they reference same object