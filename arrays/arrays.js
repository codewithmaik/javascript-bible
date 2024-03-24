// Introducing to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// Way one to create an array: Literal syntax
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// Way two to create an array
const birthYears = new Array(1998, 2003, 2008);
console.log(birthYears);

// How to reference values in arrays: bracket notation
// JS expects an expression in the brackets
// IMPORTANT! Arrays are 0 indexed, first element has index 0

console.log(friends[0]); // Output: Michael
console.log(friends[2]); // Output: Peter

// How to get the length of the array
console.log(friends.length); // Output: 3
// .length is a property

// How to get the last element of an array
console.log(friends[friends.length - 1]);

// How to add/replace elements to the array
friends[2] = "Chris";
console.log(friends); // Replace Peter with Chris

// As we said variables declared with const are immutable, however only from primitive data types

// Arrays also expect expressions
// You can even put arrays in arrays
// Legal:
const firstName = "Maik";
const maik = [firstName, "Cawelius", 2024 - 1998, friends];
console.log(maik);

// Little array exercise
const calcAge = birthYear => 2024 - birthYear;

// One way to do it
const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[2]);


console.log(age1, age2, age3);

// another way to do it
const ages = [
   calcAge(birthYears[0]),
   calcAge(birthYears[1]),
   calcAge(birthYears[2])
]

console.log(ages);