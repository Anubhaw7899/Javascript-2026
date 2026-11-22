const person = {
    name: "Anubhaw",
    age: 25,
    city: "Delhi",
    profession: "Developer",
    isStudent: true
};

console.log("Accessing object and its properties");

console.log(person);
// access properties using dot or bracket notation
console.log(person.name);
console.log(person["age"]);

console.log("Object Operations");

// object add
person.country = "India";
console.log(person);
// object update
person.age = 26;
console.log(person.age);
// object delete
delete person.isStudent;
console.log(person);

// NESTED OBJECT
console.log(`ADDING a NESTED OBJECT`);
person.address = {street: "MG Road", city: "Delhi"};
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["street"]);
console.log(person["address"]["city"]);
console.log(person);

// method in object
// person.greet = function() {
//     console.log(`Hello, my name is ${this.name}`);
// };
// person.greet();


console.log("METHOD in object");

let person2 = {
    name: "Ravi",
    age: 30,
    profession: "Designer",
    isStudent: false,
    country: "India",
    address: {street: "Link Road", city: "Mumbai"},
    greet: function() { return `Hi, I'm ${this.name}`; }
};
console.log(person2.greet());

// Object methods
console.log(`OBJECT methods`);
console.log(`Keys: ${Object.keys(person)}`);
console.log(Object.keys(person));

console.log(`Values: ${Object.values(person)}`);
console.log(`Entries: ${Object.entries(person)}`);
console.log(Object.hasOwn(person, "age"));
console.log(Object.hasOwn(person, "city"));
console.log(Object.hasOwn(person, "address"));
console.log(Object.hasOwn(person, "country"));
console.log(Object.hasOwn(person, "isStudent"));
console.log(Object.hasOwn(person, "city"));

// ARRAY of objects
let people = [
    {
        name: "Sita",
        age: 28,
        city: "Delhi",
        country: "India",
        profession: "Teacher"
    },
    {
        name: "Mohan",
        age: 35,
        city: "Mumbai",
        country: "India",
        profession: "Engineer"
    },
    {
        name: "Geeta",
        age: 22,
        city: "Chennai",
        country: "India",
        profession: "Student"
    },
    {
        name: "Ramesh",
        age: 40,
        city: "Kolkata",
        country: "India",
        profession: "Manager"
    },
    {
        name: "Suman",
        age: 33,
        city: "Pune",
        country: "India",
        profession: "Doctor"
    },
    {
        name: "Alok",
        age: 29,
        city: "Delhi",   
        country: "India",
        profession: "Artist"        
    },
    {
        name: "Neha",
        age: 27,
        city: "Bangalore",
        country: "India",
        profession: "Lawyer"
    }
];
console.log(`ARRAY of OBJECTS`);
console.log(people.sort((a,b) => a.age - b.age).map(p => p.age).filter(a => a > 30));