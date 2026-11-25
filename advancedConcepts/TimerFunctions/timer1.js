// setTimeout - runs a function after a delay
// console.log("Start");
// setTimeout(() => {
//     console.log("Hello after 2 seconds");
// }, 2000);
// console.log("End");

// setInterval - runs repeatedly
// console.log("Start");

// setInterval(() => {
//     console.log("Repeating every 1 second");
// }, 1000);

// clearInterval can stop it
// let count = 0;
// const intervalId = setInterval(() => {
//     count++;
//     console.log("Repeat code after every 1 sec");
    
//     if(count === 5) {
//         clearInterval(intervalId); // passed id as argument
//         console.log("Stopped");
//     }
// }, 1000);
// console.log("End");


// clearTimeout - stops a timeout
console.log("Start");
const timeoutId = setTimeout(() => {
    console.log("Will not run");
}, 2000);
clearTimeout(timeoutId);
console.log("End");

    