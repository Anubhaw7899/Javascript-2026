// what is fetch API - it is used to make network requests and get data from a server
// returns a promise with the response

 

//We use two .then() calls because the first handles the Response, while the second handles the parsed response data:
//response.json() is asynchronous, so it returns another Promise that is handled by the second .then().

// make a GET request  (get fetch API)
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then( data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => console.log("done"))



let data =[{
    title: "foo",
    body: "bar"
},
{
    title: "baz",
    body: "qux"
},
{
    title: "quux",
    body: "corge"
}
]
// make a POST request (post fetch API)
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    // body: JSON.stringify({
    //     title: "foo",
    //     body: "bar",
    //     userId: 101
    // })
    body: JSON.stringify(data)
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log("done"))



// Error Handling
console.log("ERROR HANDLING IN FETCH");
fetch("https://jsonplaceholder.typicode.com/invalid")
.then((res)=>{
    if(!res.ok){
        console.log("HTTP Error Status: ",res.status);
    }
    return res.json()
})
.then( data => console.log(data))
.catch(err => console.log(err))
.finally(()=>console.log("Done with HTTP handling"));