// reduce method 
// We use JavaScript’s reduce() to combine an array’s values into one result. 
// That result can be a number, string, object, or even another array.
let nums = [10,2,3,40];
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);
let product = nums.reduce((acc,n)=>acc*n,1);
console.log(product);
let max = nums.reduce((acc,n)=>acc>n?acc:n,0);
console.log(max);
let min = nums.reduce((acc,n)=>acc<n?acc:n,nums[0]);
console.log(min);
let avg = nums.reduce((acc,n)=>acc+n,0)/nums.length;
console.log(avg);
// sum of squares
let sumSquares = nums.reduce((acc,n)=>acc+n*n,0);
console.log(sumSquares);
// product of squares
let prodSquares = nums.reduce((acc,n)=>acc*n*n,1);
console.log(prodSquares);
// sum of cubes
let sumCubes = nums.reduce((acc,n)=>acc+n*n*n,0);
console.log(sumCubes);
// product of cubes
let prodCubes = nums.reduce((acc,n)=>acc*n*n*n,1);
console.log(prodCubes);
// sum of fourth powers
let sumFourth = nums.reduce((acc,n)=>acc+n**4,0);
console.log(sumFourth);
// product of fourth powers
let prodFourth = nums.reduce((acc,n)=>acc*n**4,1);
console.log(prodFourth);

// on string
let words = ["hello","world"];
let joined = words.reduce((acc,w)=>acc+" "+w);
console.log(joined);
let joined2 = words.reduce((acc,w)=>acc+","+w);
console.log(joined2);