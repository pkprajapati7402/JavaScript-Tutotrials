// # Exponents
// JavaScript can also perform exponentiation such as 2³ or 10².

// In written math, we might see an exponent as a superscript number (like above), but typing superscript numbers isn't always easy on modern keyboards. Since exponentiation is super similar to multiplication, JavaScript uses the notation **.

// let score = 0

// score = 2 ** 2      // score is 4
// score = 2 ** 3      // score is now 8
// score = 2 ** 4      // score is now 16
// score = 2 ** 5      // score is now 32

// console.log(score)  // Output: 32

// Note: In the order of operations, exponents are calculated before multiplication/division and addition/subtraction.
// const userInput = prompt("Please enter your name:");
// JS program to calculate the BMI of a person

// BMI = mass / height^2;

const mass = 50;
const height = 180;
let bmi = mass / height ** 2;
console.log("BMI : ", bmi);