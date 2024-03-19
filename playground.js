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

/*
let firstName = 'Maik';
console.log(firstName);
*/

// With let, we declare a variable, like a box to hold a value.
// 'firstName' is the name of the variable, the name of the imaginary box.
// With '=', we assign a value to a variable.
// 'Maik' is the value, in this case, of type string.
// A value is the smallest piece of information we have in JavaScript.
// We use the console.log() method to print something in the console.

// Variable Naming Conventions
// Variable names should be descriptive, like in the upcoming example.

// Not very descriptive.

/*
let job1 = 'mechanic';
let job2 = 'engineer';
*/

/*
// Very descriptive.
let myFirstJob = 'mechanic';
let mySecondJob = 'engineer';
*/


// Constants like the number Pi, should be written in uppercase.
/*
let PI = 3.1415;
*/

// Moreover, variable names can only contain letters, numbers, underscore and dollar-sign.
// Numbers at the beginning of variable names are not allowed.
// Examples for variable names:
/*
let myVariable;
let _privateVariable;
let $specialVariable;
let myVariable123;
let AnotherVariable;
*/

// However, it is a good practice to use the camelCase convention.
// Examples for camelCase:
/*
let myDogsName = 'Mila';
let myVariableName;
*/

// Be careful with reserved keywords in JavaScript, like function, they are not allowed.


// 3. Primitive Data Types
// There are 7 primitive data types in JavaScript.

/*
let age = 23; // Number: Floating point numbers, used for decimals and integers.
*/

/*
let lastName = 'Cawelius'; // Sequence of characters, used for text.
*/

/*
let fullAge = true; // Boolean: Logical Type that can be true or false, used for decision making.
*/

/*
let children; // Undefined: Value taken by a variable that is not yet defined ('empty value').
*/

/*
// Null: Also is an empty value, but used in other cases.
console.log(typeof null); // Bug in JavaScript, should print out 'null',
*/

// Symbol (ES2015): Value that is unique and can't be changed.

// BigInt (ES2020): Larger integers than the Number data type can hold.


// 4. Dynamic Typing

/*
JavaScript has dynamic typing, which means we don't have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.
*/

/*
let javaScriptisFun = true;
console.log(typeof javaScriptisFun); // Output: boolean

javaScriptisFun = 'YES!';
console.log(typeof javaScriptisFun); // Output: string
*/

// In this case, we can change the value of the variable, that is meant by dynamic typing.
// We use the typeof operator, to find out which type the value is.


// 5. let, const and var

// let and const declarations were introduces in ES6 (2015)

// Example for let variables.

/*
let currentAge = 25;
currentAge = 26;
*/

// With let variables, it is possible to mutate the value later.
// We should use them when we know, that the value can change later down the road.

// Example for const variables.

/*
const birthYear = 1998;
birthYear = 1999; 
*/

// not possible, can't change a constant
// With const variables, it is not possible to mutate the value later.
// We should use them when we know, that the value will never change.

// Example for var variables.

/*
var favouriteMeal = 'Currywurst';
favouriteMeal = 'Kebab';
*/

// seems to work the same we as let, should never use them though.

// 6. Basic Operators

// MATH OPERATORS

/*
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Modulus (%)
- Exponentiation (**)
- Increment (++)
- Decrement (--)
*/

/*

Maybe add this to the string section.

const firstName = 'Maik';
const lastName = 'Cawelius';
console.log(firstName + ' ' + lastName);

*/

// ASSIGNMENT OPERATORS

/*
- =
- +=
- -=
- *=
- /=
- %=
**=
*/

/*
let x = 10 + 5;
x += 20;
x *= 2;
console.log(x);
*/

// COMPARISON OPERATORS

/*
In JavaScript, comparison operators are used to compare values. They return a Boolean value depending on whether the comparison is true or false.

These operators are commonly used in conditional statements and expressions to control the flow of a program based on comparisons between values.
*/

/*
- Equal to (==)
- Strict equal to (===)
- Not equal to (!=)
- Strict not equal to (!==)
- Greater than (>)
- Less than (<)
- Greater than or equal to (>=)
- Less than or equal to (<=)
*/

/*
const currentYear = 2024;
const ageMaik = currentYear - 1998;
const ageMaren = currentYear - 2003;
console.log(ageMaik > ageMaren);
console.log(ageMaren >= fullAge);

const fullAge = 18;

console.log(ageMaik, ageMaren);
const isFullAge = ageMaik >= fullAge;
console.log(isFullAge);
*/

// OPERATOR PRESEDENCE

/*
In JavaScript, operator precedence refers to the rules that determine the order in which operators are evaluated when expressions are analyzed. Operators with higher precedence are evaluated first, followed by operators with lower precedence.
*/

/*
The following shows that the addition inside the parentheses is executed first, as parentheses have a higher precedence than mathematical operators.
*/

/*
const averageAge = (ageMaik + ageMaren) / 2;
console.log(averageAge); // Output: 23,5
*/


// CODING CHALLENGE

/*
1. Store Maik's and Maren's mass and height in variables.
2. Calculate both their BMIs, using the formula.
3. Create a boolean variable 'hasMaiksHigherBMI' containing
   information about whether Maik has a higher BMI than Maren.
4. Log both their BMIs and the boolean variable to the console.
*/

/*
let maiksMass = 93;
let maiksHeight = 1.84;

let marensMass = 62;
let marensHeight = 1.73;

let maiksBMI = maiksMass / (maiksHeight ** 2);
let marensBMI = marensMass / (marensHeight ** 2);

let hasMaikHigherBMI = maiksBMI > marensBMI;

console.log(maiksBMI, marensBMI, hasMaikHigherBMI);
*/


// Strings and Template Literals

/*
const firstName = 'Maik';
const job = 'mechanic';
const birthYear = 1998;
const currentYear = 2024;

// The old way to do it
const maik = "I'm " + firstName + ", a " + (currentYear - birthYear) + ' years old ' + job + '!';
console.log(maik);

// The ES6 way to do it
const maikNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job} !`;
console.log(maikNew);

// Also for regular strings
console.log(`Just a regular string...`);

// Old way to write multi-line-strings.
console.log('String with \n\
multiple \n\
lines..');

// The ES6 way to write multi-line-strings.
console.log(`String with
multiple
lines.`);
*/


// CONTROL STRUCTURE
/*
const age = 16;
const isOldEnough = age >= 18;

if(isOldEnough) {
   console.log('Sarah can start the driving license!');
} else {
   const yearsLeft = 18 - age;
   console.log(`Sarah is to young, she has to wait another ${yearsLeft} years.`);
}
*/

/*
const birthYear = 1998;

let century; // century has to be defined outside the code block.
if (birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}

console.log(century);
*/


// CODING CHALLENGE

/*
let maiksMass = 93;
let maiksHeight = 1.84;

let marensMass = 62;
let marensHeight = 1.73;

let maiksBMI = maiksMass / (maiksHeight ** 2);
let marensBMI = marensMass / (marensHeight ** 2);

let hasMaikHigherBMI = maiksBMI > marensBMI;

console.log(maiksBMI, marensBMI, hasMaikHigherBMI);

if (maiksBMI > marensBMI) {
   console.log(`Maik's BMI (${maiksBMI}) is higher than Maren's BMI (${marensBMI}).`);
} else {
   console.log(`Maren's BMI (${marensBMI}) is higher than Maik's BMI (${maiksBMI})`);
}
*/

// Type Conversion and Type Coercion

// Type Conversion

/*

Type conversion in JavaScript refers to the process of changing a value from one data type to another.

Number() - to convert several data types into a Number.
String() - to convert several data types into a String.

*/

/*

// 1.
const birthYear = '1998'; // String
let age = 25; // Number
let currentYear = birthYear + age; // String + Number
console.log(`We are in the year ${currentYear}`); // Output: 199825 

// 2.
const newBirthYear = Number(birthYear); // number
// let age = 25 // Number
let newCurrentYear = newBirthYear + age; // Number + Number
console.log(`We are in the year ${newCurrentYear}`);


*/

/*

Learning:

1. In JavaScript, the 'age' variable is implicitly converted into a string and concatenated with the 'birthYear' string in the 'currentYear' calculation, resulting in unexpected behavior.

2. When we explicitly convert the birthYear into a Number using the Number() function, we obtain the expected output.

*/

// NaN

/*

// 1.
const convertName = 'Maik';
console.log(`My name is ${Number(convertName)}`); // Output: NaN

// 2.
console.log(typeof NaN); // Ouptput: Number

*/

/* 

Learning:

1. NaN stands for 'Not a Number' and is a special value of the Number data type in JavaScript. It is used to indicate that an operation is not defined, e.g. when a string can't be converted into a number.

2. It's important to note that NaN is actually a number, but a special one.

*/

// Type Coercion

/*

Type coercion in JavaScript refers to the automatic conversion of data types during operations, which can lead to unexpected behavior if not carefully handled.

*/

/*

// 1.
console.log('I am ' + 25 + ' years old.'); // String
console.log('I am ' + '25' + ' years old.'); // String

// 2.
console.log('30' - '10' - 5); // Output: 15

// 3.
console.log('10' + '10' - 2); // Output: 1008;
*/

/*

Learning:

1. The + operator triggers to convert Numbers into Strings.

2. The - operator triggers to convert Strings into Numbers. This also applies to *, /, ** and %.

3. The operator triggers only the following value.

*/

// Truthy and False Values

// 1. Example
/*
console.log(Boolean(0)); // Output: false
console.log(Boolean('')); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(NaN)); // Output: false
*/

/*

Learning:

Besides 'false', there are only 5 falsy values in JavaScript:

- 0
- ''
- undefined
- null
- NaN

*/

/*
const money = 1;
if (money) {
   console.log("Don't spend it all!");
} else {
   console.log("You should get a job!");
}

let height = 1;

if (height) {
   console.log("Hight is defined.")
} else {
   console.log("Hight is undefined.")
}

- JavaScript does only do type coercion 2 booleans in 2 scenarios:
- using logical operators
- in logical context, e.g. in an condition of an if/else statement.

*/

/*
const age = 18;
// Strict Equality Operator, does not do type coercion
if (age === 18) console.log("You are an adult.");

// Lose Equality Operator, does type coercion
if (age == 18 ) console.log("You are an adult.");
*/

/*
const favNumber = prompt("What's your favourite number?");
console.log(favNumber);
console.log(typeof favNumber); // Output: String

if (favNumber == 10) { // '23' == 23
   console.log("Cool, 10 is a great number");
}
// Solution: Convert  the prompt into a number.
*/

// if - else if - else
// const favNumber = prompt("Enter your fav number:");

/*
if (favNumber === 25) {
   console.log("25 is a nice number");
} else if (favNumber === 30) { // add as many as you want
   console.log("30 is a nice number");
} else {
   console.log("Number is not 25 or 30");
}
*/

// if (favNumber !== 23) console.log("Why not 23?");

/*
// Basic Boolean Logic
// A and B
const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
// A or B
console.log(hasDriversLicense || hasGoodVision);
// Not A, Not B
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
   console.log("Sarah should drive!");
} else {
   console.log("Someone else should drive");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
   console.log("Sarah should drive!")
} else {
   console.log("Someone else should drive!");
}
*/

/*
const day = "sunday";
// Switch statements do strict comparison
switch(day) {
   case "monday": // day === "monday"
      console.log("Plan course structure.");
      console.log("Go to coding meeting");
      break;
   case "tuesday":
      console.log("Prepare theory videos");
      break;
   case "wednesday":
   case "thursday":
      console.log("Write code examples");
      break;
   case "friday":
      console.log("Record videos.");
      break;
   case "saturday":
   case "sunday":
      console.log("Enjoy the weekend.");
      break;
   default:
      console.log("Not a valid day.");
}

// Same using a switch statement
if (day === "monday") {
   console.log("Plan course structure.");
   console.log("Go to coding meeting");
} else if (day === "tuesday") {
   console.log("Prepare theory videos");
} else if ( day === "wednesday" || day === "thursday") {
   console.log("Write code examples");
} else if (day === "friday") {
   console.log("Record videos.");
} else if (day === "saturday" || day === "sunday") {
   console.log("Enjoy the weekend.");
} else {
   console.log("Not a valid day");
}
*/

// Statements and Expressions

// Expression produce a value

// Statements doesn't produce a value
// Statements are like a story that tell something whereas expression are the words of it.

// JavaScript expects statements and expressions in different places.

// e.g expects a expression in a template literal.

// The Conditional (Ternary) Operator
// Condition - if part - else part


// const age = 23;

/*
age >= 18 ? console.log("I like to drink wine."):
console.log("I like to drink water");

// Operator produces a value, is an expression
// so we can use this operator to declare variables

const drink = age >= 18 ? "wine" : "water";
console.log(drink);
*/

// Also usable in a ternary opeator

/*
console.log(
   `I like to drink ${age >= 18 ? "wine" : "water"}`
);
*/

// History of JavaScript

/*
1995: Brendan Eich creates the very first version of JavaScript in just 10 days. It was called Mocha, but already had many fundamental features of modern JavaScript.
*/

/*
1996: Mocha changes to LiveScript and then to JavaScript,
in order to attract Java Developers. However, JavaScript
has almost nothing to do with Java.
*/

/*
Microsoft launches Internet Explorer, copying JavaScript from NetScape and calling it JScript.
*/

/*
With need to standardize the language, ECMA releases ECMAScript 1 (ES1), the first official standard for JavaScript (ECMAScript is the standard, JavaScript the language in practice).
*/

/*
2009: ES5 (ECMAScript 5) is released with lots of great features.
*/

/*
2015: ES6/ES2015 (ECMAScript 2015) was released: the biggest update to the language ever.
*/

/*
ECMAScript changes to annual release cycle in order to ship less features per update.
*/

/*
2016 - end: Release of ES2016 - ES2017 ...
*/

/*
Backwards Compatibility: Don't break the web!
The modern JavaScript engine is able to read code that was written 25 years ago.
- old features are never removed
- nor really new versions, just incremental updates (releases)
- websites keep working forever
However JavaScript is not forwards compatible ?? Modern browser do not understand code from the future.
*/

/*
How to use modern JavaScript today?
- During Development: Simply use the latest Google Chrome
- During Production: Use Babel to transpile and polyfill your code, converting back to ES5 to ensure browser compatibility for all users.
*/

/*
ES5: Fully supported in all browsers (down to IE9 from 2011), ready to be used today.

ES6/2015 - ES2020: Well supported in all modern browsers, not supported in older browsers, can use the most features in production with transpiling and polyfilling.

ES2021 - end: Future versions of the language (new feature proposals that reach Stage 4), can already use some features in production with transpiling and polyfilling.
*/

// 'use strict';
// helps us to write more secure code, it forbids us to do certain things and it creats visible erros during development.

// Write an example




