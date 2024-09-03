// In the last exercise, we got a demo of the while loop. Let's explore this more!

// The while loop uses a condition that is either true or false.

// while (condition) {
//   // Code here
// }

// As long as the condition is true, the code in the while loop will run. Otherwise, the loop ends when the condition becomes false.

// The logic is quite similar to how we used if statements. The difference is that instead of executing once if a condition is true, the while loop executes it again and again while that condition is true.


// Write code below 
const luckyNumber = 7;
let a = Math.floor(Math.random() * 10) + 1;

while(a != luckyNumber){
  console.log("Nope, it isn't ", a);
  a = Math.floor(Math.random() * 10) + 1;
}
console.log("My lucky number is 7!");