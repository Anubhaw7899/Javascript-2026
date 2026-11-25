// Promise - represents an async operation that may complete in the future
// Promise - Success(resolve)  / Failure(reject)
// Syntax: new Promise((resolve, reject) => {...})


// create a promise
let myPromise = new Promise((resolve, reject) => {
    // let success = true;
    // if (success) resolve("Promise is resolved successfully");
    // else reject("Promise is failed");

    setTimeout(() => resolve("Promise resolved successfully"), 3000)
});

// use the promise
myPromise.then((msg) => {
    console.log(msg)
})
    .catch((err) => {
        console.log(err)
    });

