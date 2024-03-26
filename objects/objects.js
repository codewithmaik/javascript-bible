// Objects
// In Objects we define key-value-pairs.

// Objects literal syntax
const maik = {
  firstName: "Maik",
  lastName: "Cawelius",
  age: 25,
  friends: ["Lukas", "Nils", "Franzi"]
}

// the keys are also called properties..

// The order of the elements in objects does not matter when we want to retrieve them..

// Should use for more unstructured data..

console.log(maik);

console.log(maik.lastName);
// to get the value of the property last name..

console.log(maik["lastName"]);
// difference is that we can build any value in the bracket notation

// example
const nameKey = "Name";

console.log(maik["first" + nameKey]);

// When we first need to compute the property name then we can use the brackets, otherwise dot notation

// Example
const interestedIn = prompt("What do you want to know about Maik? Choose between firstName, lastName, age and friends.");

console.log(maik[interestedIn]);

// however with dot notation we would get undefined, as we get undefined if we want to access a property that does not exist..



