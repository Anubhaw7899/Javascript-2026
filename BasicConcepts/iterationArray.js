// forEach, map, filter, find, indexOf, sort
// forEach loop - it is used to iterate over array elements
console.log(`FOREACH TESTING`);

let arr = [1, 2, 3];
arr.forEach(el => console.log(el));

// real life example of forEach
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(f => console.log(f));

// can also use for loop
for (let i = 0; i < fruits.length; i++) console.log(fruits[i]);
// or for of loop
for (let f of fruits) console.log(f);

// map - creates a new array by applying a function to each element, it does not change the original array
console.log(`MAP TESTING`);
let numbers = [1, 2, 3];
let squared = numbers.map(n => n * n);
console.log(squared);
let doubled = numbers.map(n => n * 2);
console.log(doubled);
console.log(numbers);
// project example
let names = ["Alice", "Bob"];
let upper = names.map(n => n.toUpperCase());
console.log(upper);
console.log(names);

// map with array of  objects 
console.log(`MAP WITH ARRAY OF OBJECTS`);
let people = [
    { name: "Alice", age: 25, city: "NY", eligibleToVote: true },
    { name: "Bob", age: 30, city: "LA", eligibleToVote: false },
    { name: "Charlie", age: 28, city: "SF", eligibleToVote: true },
    { name: "Dave", age: 35, city: "CHI", eligibleToVote: false },
    { name: "Eve", age: 22, city: "NY", eligibleToVote: true },
    { name: "Frank", age: 40, city: "LA", eligibleToVote: true },
    { name: "Grace", age: 27, city: "SF", eligibleToVote: true }
];
let namesOnly = people.map(p => p.name);
console.log("names:",namesOnly);

// filter - it is usd to get elements based on condition, returns new array of them
console.log(`FILTER TESTING`);
let eligibleVoters = people.filter(p => p.eligibleToVote).map(p => p.name);
console.log("eligible voters are:", eligibleVoters);

let nonVoters = people.filter(p => !p.eligibleToVote)
console.log("non-voters full details:", nonVoters);

console.log("non voters:", nonVoters.map(p => p.name));

// find - it is used to get first element matching condition , this returs single object or value
console.log(`FIND TESTING`);
let firstVoter = people.find(p => p.eligibleToVote);
console.log("first voter full details:", firstVoter);
console.log("first voter:", firstVoter.name);

let firstNonVoter = people.find(p => !p.eligibleToVote);
console.log("first non voter full details:", firstNonVoter);
console.log("first non voter:", firstNonVoter.name);

// it returns first match
console.log("first number > 15:", [10,20,30].find(n => n > 15));

// indexOf - gets index of element
console.log(`INDEXOF TESTING`);
console.log("index of Alice:", namesOnly.indexOf("Alice"));
console.log("index of Bob:", namesOnly.indexOf("Bob"));
// if element not found, returns -1
console.log("index of Tom:", namesOnly.indexOf("Tom"));  //-1

// sort - sorts array
console.log(`STRING SORTING`);
let sortedNames = namesOnly.sort();
console.log("sorted names:", sortedNames);
// reverse
console.log("reversed:", sortedNames.reverse());
console.log("sorted names with a,b:", namesOnly.sort((a,b)=>a-b));
console.log("reverse sorted names with b,a:", namesOnly.sort((a,b)=>b-a));


console.log("NUMBERS SORTING");

// sort numbers
console.log([300,500,2, 4, 800].sort((a,b) => a-b));
// descending
console.log([400,30,100,200].sort((a,b) => b-a));

// mixed example
let adults = people.filter(p=>p.age>25).map(p=>p.name).sort();
console.log("adults:", adults);