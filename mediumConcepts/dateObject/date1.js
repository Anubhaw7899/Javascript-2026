const today = new Date();
console.log("ACCESS DATES");
console.log(today);

// birthday
const birthday = new Date("1998-05-15");
console.log(birthday);
console.log(`birthday: ${birthday}`);

// get Date methods
console.log("GET DATES");

const dateNow=new Date();
console.log(dateNow);
console.log("Year:",dateNow.getFullYear());
console.log("Month:",dateNow.getMonth()+1); //getMonth() gives a value from 0 to 11, not 1 to 12:
console.log("Date:",dateNow.getDate());
console.log("Day:",dateNow.getDay());
console.log("Hours:",dateNow.getHours());
console.log("Minutes:",dateNow.getMinutes());
console.log("Seconds:",dateNow.getSeconds());
console.log("Milliseconds:",dateNow.getMilliseconds());
console.log("Time:",dateNow.getTime());
console.log("ISO:",dateNow.toISOString());
console.log("Locale:",dateNow.toLocaleString());
console.log("UTC:",dateNow.toUTCString());

// set Date methods
console.log("SET and MODIFY DATES");
const newDate = new Date();
newDate.setFullYear(2025);
newDate.setMonth(11);
newDate.setDate(25);
newDate.setHours(10);
newDate.setMinutes(30);
newDate.setSeconds(45);
newDate.setMilliseconds(500);
console.log("newDate after setting and updating", newDate);

// Format date into string
console.log("FORMATTING DATE");
let todayDate =new Date();
console.log("date into string format",todayDate.toDateString());
console.log("time into string",todayDate.toTimeString());
console.log("Locale date",todayDate.toLocaleDateString());
console.log("Locale time",todayDate.toLocaleTimeString());
console.log("ISO string",todayDate.toISOString());
console.log("UTC string",todayDate.toUTCString());

// Get Current Time stamp and time difference
const startDate = new Date("2024-06-01");
const endDate = new Date("2024-06-10");
console.log("Time diff:", endDate - startDate);
console.log("Time diff in days:", (endDate - startDate)/(1000*60*60*24));
console.log("Time diff in hours:", (endDate - startDate)/(1000*60*60));
console.log("Time diff in minutes:", (endDate - startDate)/(1000*60));
console.log("Time diff in seconds:", (endDate - startDate)/1000);
console.log(`Number of days between ${startDate} and ${endDate} is ${(endDate-startDate)/(1000*60*60*24)} days`);
