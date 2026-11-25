// DOM(Document Object Model) allows JS to interact with HTML elements
// You can select, modify, and create elements using JS
// what is DOM ? - It is a representation of the HTML structure in JS

console.log("DOM body",document.body.firstChild.nextSibling.innerHTML);

console.log(document.getElementById("title").innerHTML);  //access element by id
console.log(document.getElementsByClassName("text")[0].innerHTML);  //access by class
console.log(document.querySelector("p").innerHTML);  //access by selector
console.log(document.querySelector("#title").innerHTML);  //access by id with querySelector 
console.log(document.querySelector(".text").innerHTML);  //access by class with querySelector   

// queryselectorall elements
console.log(document.querySelectorAll("p")[0].innerHTML);  //access all p elements
console.log(document.querySelectorAll(".text")[0].innerHTML);  //access all by class

// get Element by tag
console.log(document.getElementsByTagName("p")[0].innerHTML);

// Manipulating DOM
document.getElementById("title").innerHTML = "<i>New Title</i>";
document.querySelector(".text").innerText = "Changed Text";
document.querySelector("p").style.color = "red";
document.querySelector("p").style.fontWeight = "bold";
document.querySelector("p").style.fontSize = "20px";   
// document.getElementById("logo").src="logo.png";
// document.getElementById("href").href="index.html";  //manuipulating link

// Adding and Removing elements

function add() {
    let div = document.createElement("div");
    div.innerHTML = "New Element";
    document.getElementById("container").appendChild(div);
}
function remove() {
    let container = document.getElementById("container");
    if(container.lastChild) container.removeChild(container.lastChild);
}

document.getElementById("add").addEventListener("click",function(){
    alert("Clicked");
});