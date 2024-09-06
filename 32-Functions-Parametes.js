// # Parameters
// By now, you may be wondering why functions even use these parentheses. Do they have a purpose? In fact, they do!

// When defining a function, you can add one or more parameters inside the parentheses to signify what input(s) the function needs when called.

// function example(parameter) {
//   // Function code here
// }

// Inside the function body, we can use this parameter to return something else, such as using it in an evaluation.

// Here's another example of parameters, using an updated greetings() function:

// function greetings(name) {
//   console.log("Hi! My name is " + name + ".");
// }

// greetings("Marshall");

// Try this out for yourself by running the code in our editor!

// You can add more than one parameter to a function, separated by commas, and they can be any data type!

// Try the following:

// function greetings(name, age) {
//   console.log("Hi! My name is " + name + ".");
//   console.log("I am " + age + "years old.")
// }

// greetings("Marshall", 30);

// # Arguments
// After we define a function with parameters, we can call it later in our program. But we have to include a value in the parentheses.

// When calling a function, we call these values arguments that are passed to the function to return something.

// greetings("Cody");

// This logs the following to the console:

// Hi! My name is Cody.

// Note: If we do not pass an argument, an undefined value is used instead. (e.g., Hi! My name is undefined.)

// So to recap:

// Parameters are used when defining a function.
// Arguments are used when calling a function.
// Instructions
// In 1905, renowned scientist Albert Einstein changed the world of physics with his theory of relativity. It transformed how we understand the relationship between space, time, and energy.

// The most notable equation to come out of this theory was the following:

// E=mc 
// 2
 
// The E stands for "Energy", which is the product of the following:

// m for mass, usually measured in kilograms (kg).
// c 
// 2
//   is the speed of light multiplied by itself.
// Let's write a function called relativityTheory().

// It should accept a single mass parameter that is an integer or decimal number.

// Afterward, call the relativityTheory() function with a mass argument.


function relativityTheory(mass){
    console.log("Energy = " + (mass * 9) + " x 10^16 J");
  }
  relativityTheory(45);