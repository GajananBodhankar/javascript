console.log("Value of age", age);

var age = 19;

console.log("value of age", age);
// Reason => variables initialized with "var" keyword are moved to the top
// of the scope before their initialization/declaration and their valued as "undefined"
// output => value of age undefined
//           value of age 19

name = "john";
console.log("name is", name);
let name = "max";
console.log("name is", name);

// In case of 'let' as it does not support hoisting nor it supports re-initialization,
// line no.11 is declared as dead zone
// A zone between the start of scope and the first variable declaration
