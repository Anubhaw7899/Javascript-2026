// spread operator allows expanding arrays or objects
console.log("SPREAD examples");
let arr = [1,2];
console.log(...arr); // 1 2
let arr2 = [3,4];
console.log([...arr,...arr2]); // [1,2,3,4]
let obj = {a:1,b:2};
console.log({...obj}); // {a:1,b:2}
let obj2 = {c:3};
console.log({...obj,...obj2}); // {a:1,b:2,c:3}
let obj3 = {d:4};
console.log({...obj,...obj3}); // {a:1,b:2,d:4}
let obj4 = {e:5};
console.log({...obj,...obj4}); // {a:1,b:2,e:5}

// spread is used in many places like function calls, array literals, object literals
function sum(x,y,z){ return x+y+z; }
let nums = [1,2,3];
console.log(sum(...nums)); // 6
let moreNums = [4,5,6];
console.log(sum(...moreNums)); // 15
let combined = [...nums,...moreNums];
console.log(combined); // [1,2,3,4,5,6]

let obj5 = {f:6};
console.log({...obj,...obj5}); // {a:1,b:2,f:6}
let obj6 = {g:7};
console.log({...obj,...obj6}); // {a:1,b:2,g:7}
let obj7 = {h:8};
console.log({...obj,...obj7}); // {a:1,b:2,h:8}

// So spread operator is mainly used in 3 ways
// 1. In function calls - passing array items as separate function arguments
// 2. In array literals - expanding elements of an array
// 3. In object literals - expanding properties of an object


// Destructuring - extracting values from arrays or objects into variables
// destructuring helps us to extract values easily into variables without using indexes or keys explicitly
console.log(`DESTRUCTURING Example`); // array and object

console.log(`Array destructuring`);
let numsArr = [1,2,3];
let [x,y] = numsArr;
console.log(x,y); // 1 2

console.log(`Object destructuring`);
let obj8 = {i:9,j:10};
let {i,j} = obj8;
console.log(i,j); // 9 10

// Destructuring can also be combined with spread
console.log(`Destructuring with spread`);
let [first,...rest] = combined;
console.log(first,rest); // 1 [2,3,4,5,6]
let {a,...others} = obj;
console.log(a,others); // 1 {b:2}