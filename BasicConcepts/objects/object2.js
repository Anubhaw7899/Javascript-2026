// Loop through object properties
// object with 20 key:value pairs and proper real life keys
const person = {
  name: "John",
  age: 30,
  email: "john@example.com",
  phone: "123-456-7890",
  address: "123 Main St",
  city: "New York",
  country: "USA",
  zip: "10001",
  gender: "male",
  occupation: "developer",
  married: false
};
for (let key in person) {
//   console.log(key, person[key]);
//   console.log("Values", person.key);  // this is wrong way to access values inside for...in loop
  console.log(`Key: ${key}, Value: ${person[key]}`);
}

// Loop through keys and values of person object
Object.entries(person).forEach(([key, value]) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

// create array of keys
const keys = Object.keys(person).filter(k => k !== "email");
console.log(keys);
// create array of values
const values = Object.values(person);
console.log(values);
// create array of entries
const entries = Object.entries(person).flat().filter(e => typeof e !== "string");
console.log(entries);


// check if person has age key
console.log("Has age:", "age" in person);
console.log("Has email:", "email" in person);

// Object Destructuring
const {name, age} = person;
console.log(name, age);
const {email} = person;
console.log(email);
const {phone} = person;
console.log(phone);
console.log("OBJECT DESTRUCTURING");
const {city, country, zip, gender, occupation, married} = person;
console.log(city, country);
console.log(zip);
console.log(gender);
console.log(occupation);
console.log(married);

// Nested destructuring example
const person2= {
  name: "Alice",
  age: 27,
  address: {
    city1: "Los Angeles",
    zip1: "90001"
  }
};
// const {address: {city1, zip1}} = person2;
const {city1, zip1} = person2.address;
console.log("Nested Object Destructuring", city1, zip1);

// Spread Operator example
console.log("SPREAD OPERATOR");
const person3 = {...person}; // copies object into new one without changing original
console.log(person3);
person3.name = "Bob";
console.log(person3.name);
console.log(person.name);

const person4 = {...person, age: 40};
console.log(person4.age);
console.log(person.age);

// Merge objects - copy properties from both objects into one new object, replace duplicates with last one
console.log("MERGING OBJECTS USING SPREAD OPERATOR");
// const merged = {...person, ...person2};
const merged = {...person2, ...person};
console.log(merged);
console.log(merged.name);
console.log(merged.city1);
console.log(merged?.zip1);

// Optional chaining to avoid errors if key doesn't exist
// A missing property returns undefined,
//  but trying to access a property on undefined or null throws a TypeError.  Use optional chaining to avoid this error
delete merged.address;
console.log(`OPTIONAL CHAINING`);
// console.log(merged.address.city1);  // gives error of undefined properties can't be read
console.log(merged?.address?.zip1);  //undefined

// Nullish coalescing
console.log(merged?.address?.zip1 ?? "No zip");
console.log(merged?.address?.city1 ?? "No city");

// main advantage of optional chaining and nullish coalescing is safer access to nested properties
// advantage of ?? over || is it only checks for null or undefined, not falsy values like 0 or ""
// example
const isPersonMarried = merged?.married ?? "Not Married";
console.log(isPersonMarried);
const isMarried = merged?.married || "Not Married";
console.log(isMarried);


