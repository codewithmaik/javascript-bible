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