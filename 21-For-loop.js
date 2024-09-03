// The for loop works a bit differently, for we can determine how many times we want it to run:

// for (let i = initialValue; condition; updateIterator) {
//   // Code here
// }

// Let's break this down:

// First, we define an i iterator variable with an initialValue.
// Before the first or next iteration, we test the i variable in the condition statement. If we get true, we run the code. Otherwise, we exit the loop.
// After each iteration, we updateIterator and change the value of i.
// As the value of i changes, it should eventually cause the condition statement to return false so we can exit the for loop.

// Here is what our boiling point program looks like as a for loop:

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// To recap, we use the following parts in the for loop:

// let i = 1: initializes an iterator variable.
// i <= 10: the conditional statement that is tested before each iteration.
// i++: this increments the iterator variable by 1 after each iteration.
// Note: The ++ operator increments a number value by 1. It's the same as writing i = i + 1.

// The output would look like:

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Because we want i to change each time in the loop, we use the let keyword. We use a logical evaluation to determine if the current value of i is less than or equal to 10. After each iteration, we add 1 to the value of i (i.e., i++).

// By the way, you don't always have to print the iterator variable in the loop. For example:

// for (let i = 1; i <= 3; i++) {
//   console.log("Beetlejuice!")
// }

// // Output:
// // Beetlejuice!
// // Beetlejuice!
// // Beetlejuice!


let a = "I Must Not Tell Lies";
for(let i = 1; i <= 10; i++){
  console.log(a);
}