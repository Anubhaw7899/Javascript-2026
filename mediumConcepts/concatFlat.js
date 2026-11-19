// concat - it is used to merge arrays without changing them
let a = [1,2];
let b = [3,4];
console.log(a.concat(b)); // [1,2,3,4]
console.log(a); // original array unchanged
console.log(b); // also unchanged

// flat - flattens nested arrays
console.log([1,[2,3]].flat()); // [1,2,3]
console.log([1,[2,[3]]].flat(2)); // [1,2,3]
console.log([1,[2,[3]]].flat()); // [1,2,[3]]