// control statements guide the flow of code execution

// if-else  or else if
let mark = 30;
if (mark >= 80) {
    console.log("You have passed with distinction");
}
else if (mark >= 50) {
    console.log("You have passed");
}
else if (mark >= 35) {
    console.log("You have just passed");
}
else {
    console.log("You have failed");
}


// switch can also be used for control flow
// syntax: switch(expression) { case x: ... }    , here expression is day
let day = 8;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}


// ternary operator example   - ternary operator is shorthand for if-else      
// syntax: condition ? expr1 : expr2
// ternary operator is a ES6 feature
let age = 20;
let result = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
console.log(result);


// Real Life example of ternary
let isLogin = false;
let message = isLogin ? "Welcome back" : "Please login";
console.log(message);

// multiple ternary example
// syntax: ifCondition ? ifResult : elseIfCondition ? elseIfResult : elseResult
let score = 45;
let grade = score >= 80 ? "A" : score >= 50 ? "B" : "C";
console.log(grade);

let a = 25;
let r = a >= 60 ? "You are a senior citizen" : a > 18 ? "You are an adult" : "You are young";
console.log(r);