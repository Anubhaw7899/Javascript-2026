// Promise with states like pending, fulfilled, rejected
// create a new promise
let p = new Promise((resolve, reject) => {
    let success = false;
    if (success) resolve("Promise resolved successfully");
    else reject("Promise failed");
    // setTimeout(() => resolve("done"), 2000);
});
// use the promise
p.then(msg => console.log(msg))
 .catch(err => console.log(err))
 .finally(() => console.log("done waiting"))