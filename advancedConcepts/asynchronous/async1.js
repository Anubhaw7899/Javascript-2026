//async await - it is a substitute for then/catch in promises
// it is a cleaner way to handle async code
// we can call multiple data fetching functions sequentially using await

// declare async function
async function fetchData() {
    console.log("fetching data");
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // fetch data, this is async
        let data = await response.json(); // parse json , this is also async
        console.log(data);
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("done");
    }
    console.log("fetch complete");
}

// call async function
fetchData();