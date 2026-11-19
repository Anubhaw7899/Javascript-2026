// slice method - returns a portion of an array, without modifying existing array
let arr = [1,2,3,4,5];
console.log(arr.slice(1,3)); // from 1 to 3(3 not included)
console.log(arr.slice(-2)); // last 2 elements
console.log(arr.slice(2)); // from 2 to end
console.log("Original array", arr);


// splice method - returns removed elements and modifies array
console.log(arr.splice(1,2)); // remove 2 elements from index 1
console.log("After splice", arr); // arr is modified
console.log(arr.splice(0,1)); // remove first element
console.log("After splice", arr); // arr changed

// splice can also add elements
arr.splice(1,0,9); // add 9 at index 1
console.log(arr); // shows added element


// replace element at index 2
arr.splice(2,1,8); // replace element at index 2 with 8
console.log(arr); // shows replaced element
// can remove and add at same time
arr.splice(1,1,7);
console.log(arr); // shows final array

