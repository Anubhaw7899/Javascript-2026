// Loops in JavaScript
// for loop
for(let i=0;i<5;i++){
  console.log(i);  // index
}
// array loop
let arr = [1,2,3];
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);  // value
}
// for..of loop
for(let v of arr){
  console.log(v);  // value
}
// for..in loop
for(let i in arr){
  console.log(i);  // index
}

// for..in object
let obj = {a:1,b:2};
for(let k in obj){
  console.log(k);  // key
  console.log(obj[k]);  // value
}

// for..of on object won't work directly , will give error of not iterable
// for(let k of obj){ 
//     console.log(k); 
// }
// won't work, obj is not iterable
// need Object.keys(obj) or Object.entries(obj)

// for keys use Object.keys(obj)
for(let k of Object.keys(obj)){
  console.log(k);  // key
}
// for..of object values
for(let v of Object.values(obj)){
  console.log(v);  // value
}

// Object.entries gives [key,value] pairs for for..of
for(let [k,v] of Object.entries(obj)){
  console.log(k,v);  // key value pair
}

// for..of on string
for(let c of "hello"){
  console.log(c);  // char
}

// so the main difference is for..in gives keys, for..of needs iterable like array or Object.keys()
// for..of can't be used directly on objects
// use Object.keys or Object.values instead

// for...of gives values for arrays or iterables
// for objects use Object.keys or Object.values
// for..of works on arrays, not plain objects

// for..in works on objects for keys but also works on arrays for indices
// not values like for..of
// for..in gives keys or indices, not values

// for..in is good for objects, for..of for arrays mostly

// for..of is simpler for arrays than for..in with indices
// for..in is more for objects

// for..in can be used on arrays but gives indices, not values
// use for..of for values

// for..of works on any iterable, like arrays or strings

// for loop is basic loop with init, condition, increment
// good for fixed number of iterations
// can also be used for arrays with indices
// but for..of is simpler for values


