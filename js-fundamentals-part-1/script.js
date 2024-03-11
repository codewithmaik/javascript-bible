// This is the js-fundamentals-part-1 file

// 1. Comments

// Comments will be ignored during execution of the code.

// This is a single line comment in JavaScript.

/*
This is a 
multi
line
comment
in JavaScript.
*/

// 2. Variables

let firstName = 'Maik';
console.log(firstName);

// With let, we declare a variable, like a box to hold a value.
// 'firstName' is the name of the variable, the name of the imaginary box.
// With '=', we assign a value to a variable.
// 'Maik' is the value, in this case, of type string.
// A value is the smallest piece of information we have in JavaScript.
// We use the console.log() method to print something in the console.

// Variable Naming Conventions
// Variable names should be descriptive, like in the upcoming example.

// Not very descriptive.
let job1 = 'mechanic';
let job2 = 'engineer';

// Very descriptive.
let myFirstJob = 'mechanic';
let mySecondJob = 'engineer';


// Constants like the number Pi, should be written in uppercase.
let PI = 3.1415;

// Moreover, variable names can only contain letters, numbers, underscore and dollar-sign.
// Examples for variable names:
let myVariable;
let _privateVariable;
let $specialVariable;
let myVariable123;
let AnotherVariable;

// However, it is a good practice to use the camelCase convention.
// Examples for camelCase:
let myDogsName = 'Mila';
let myVariableName;

// Be careful with reserved keywords in JavaScript, like function, they are not allowed.


// 3. Primitive Data Types
// There are 7 primitive data types in JavaScript.

let age1 = 23; // Number: Floating point numbers, used for decimals and integers.

let firstName1 = 'Maren'; // Sequence of characters, used for text.

let fullAge = true; // Boolean: Logical Type that can be true or false, used for decision making.

let children; // Undefined: Value taken by a variable that is not yet defined ('empty value').

// Null: Also is an empty value, but used in other cases.
console.log(typeof null); // Bug in JavaScript, should print out 'null',

// Symbol (ES2015): Value that is unique and can't be changed.

// BigInt (ES2020): Larger integers than the Number data type can hold.


// 4. Dynamic Typing

/*
JavaScript has dynamic typing, which means we don't have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.
*/

let javaScriptisFun = true;
console.log(typeof javaScriptisFun); // Output: boolean

javaScriptisFun = 'YES!';
console.log(typeof javaScriptisFun); // Output: string

// In this case, we can change the value of the variable, that is meant by dynamic typing.
// We use the typeof operator, to find out which type the value is.


// 5. let, const and var

// let and const declarations were introduces in ES6 (2015)

// Example for let variables.
let age = 25;
age = 26;
// With let variables, it is possible to mutate the value later.
// We should use them when we know, that the value can change later down the road.

// Example for const variables.
const birthYear = 1998;
birthYear = 1999; // not possible, can't change a constant
// With const variables, it is not possible to mutate the value later.
// We should use them when we know, that the value will never change.

// Example for var variables.
var favouriteMeal = 'Currywurst';
favouriteMeal = 'Kebab'; 
// seems to work the same we as let, should never use them though.