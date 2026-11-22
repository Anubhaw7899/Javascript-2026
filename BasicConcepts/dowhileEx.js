// do-while real world use loop example
let password;
do{
    password = prompt("Enter password");
}while(password !== "123");
console.log("Access granted");


// for checking this - run in browser console, not Node.js
// it will keep asking until correct password is entered
// then shows access granted
// let password;   do{ password = prompt("Enter password");} while (password!=123);  console.log("Access Granted");