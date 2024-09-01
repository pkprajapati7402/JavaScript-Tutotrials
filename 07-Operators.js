// # Operators
// Computers are incredible at doing math calculations. Now that we have learned about variables, let's use them with arithmetic operators to perform math calculations.

// JavaScript has the following arithmetic operators:

// + Addition
// - Subtraction
// * Multiplication
// / Division
// % Modulo (returns the remainder)
// let score = 0        // Declare score and initialize it

// score = 4 + 3        // score is now 7
// score = 4 - 3        // score is now 1
// score = 4 * 3        // score is now 12
// score = 4 / 3        // score is now 1.3333
// score = 4 % 3        // score is now 1

// console.log(score)   // Output: 1

// And take a look at this code that calculates a 20% tip by calculating the total and then multiplying by a float (decimal number):

// const pizza = 2.99
// const coke = 0.99

// let total = pizza + coke

// let tip = total * 0.2

// console.log(tip)     // Output: 0.796

// Another way to write this is using parentheses to calculate the total and the tip in one line of code:

// let tip = (pizza + coke) * 0.2

// In JavaScript, parentheses have the highest order of operations.

// Now that we've learned about the basics of variables and operators, let's put them to use!

// Instructions
// Create a temperature.js program that converts a temperature from Fahrenheit (°F) to Celsius (°C).

// Google the current temperature of Brooklyn, NY (where Codédex is based) in °F.

// Use the following formula and write it out in JavaScript:


// Celsius= 
// 1.8
// (Fahrenheit−32)
// ​
 

// Print out the converted temperature using console.log().


// Calculatig tip for a waiter
const pizza = 3.99;
const coke = 0.99;
let total = pizza + coke;
let tip = total * 0.2;
console.log("Tip is: ", tip);