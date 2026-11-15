// JS Data type conversion examples
let num = "5";
console.log(Number(num)); // 5
console.log(String(num)); // "5"
console.log(Boolean(num)); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("hello")); // true
console.log(Number("10")); // 10
console.log(String(10)); // "10"
console.log(Boolean(1)); // true
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(String(false)); // "false"
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
console.log(Number(" ")); // 0
console.log(Boolean(0)); // false
console.log(Number(false)); // 0
console.log(String(true)); // "true"
console.log(Number("")); // 0
console.log(Number(null)); // 0
console.log(Boolean(null)); // false
console.log(String(null)); // "null"
console.log(Boolean(undefined)); // false
console.log(String(undefined)); // "undefined"  
console.log(Number(undefined)); // NaN
console.log(Boolean(NaN)); // false
console.log(String(NaN)); // "NaN"
console.log(Number("abc")); // NaN
console.log(Boolean("abc")); // true
console.log(String("abc")); // "abc"
console.log(Number("123")); // 123
console.log(Boolean("123")); // true
console.log(String(123)); // "123"
console.log(Boolean(123)); // true
console.log(Number("0")); // 0
console.log(Boolean("0")); // true
console.log(String(0)); // "0"
console.log(Boolean("false")); // true
console.log(Number("false")); // NaN
console.log(String("false")); // "false"
console.log(Boolean("")); // false
console.log(Number(" ")); // 0
console.log(Boolean(" ")); // true
console.log(Number("abc")); // NaN
console.log(Boolean("abc")); // true
console.log(String("abc")); // "abc"
console.log(Number("123abc")); // NaN
console.log(Boolean("123abc")); // true
console.log(String("123abc")); // "123abc"
console.log(Number(" 123 ")); // 123
console.log(Boolean(" 123 ")); // true
console.log(String(" 123 ")); // " 123 "
console.log(Number(" 123abc ")); // NaN
console.log(Boolean(" 123abc ")); // true
console.log(String(" 123abc ")); // " 123abc "
console.log(Number("     ")); // 0
console.log("typeof NaN is ",typeof NaN);
console.log("type of '' is ", typeof "");






