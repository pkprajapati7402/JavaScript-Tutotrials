// The .length Property
// Sometimes, we may need to know how many elements are in the array we are using. How can we find this information?

// In JavaScript, arrays are special variables that have data properties we can use. One of those properties is called .length and produces an integer that tells us how long an array is (or how many elements it has).

// arrayName.length;

// Note: The .length property is used with a period, or dot notation.

// The length of an array can also be stored in a separate variable:

// const testScores = [78, 96, 100, 88, 85, 81, 79];
// const numberOfScores = testScores.length;

// console.log(numberOfScores); // Output: 7

// # Looping Over Arrays
// One common use for the .length property of an array is working with loops (namely, the for loop):

// const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];

// for (let i = 0; i < musicNotes.length; i++) {
//   console.log(musicNotes[i]);
// }

// Using bracket notation, we can access the next element in the array with the i loop variable.

// Note: We named the iterator variable i but we can technically give this any name as long as it is consistent throughout the loop.

// We can use arrays with the while loop, too:

// const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];
// let counter = 0;

// while (counter < musicNotes.length) {
//   console.log(musicNotes[counter]);
//   counter++;
// }

// Note: When using arrays with loops, you are likely to encounter the notable "off-by-one" error that happens when you're trying to access an index that doesn't exist or if you begin the index with 1 instead of 0.

// Instructions



let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = 9;
for(let i = 0; i < arr.length; i++){
  console.log(a + " x " + arr[i] + " = " + a * arr[i]);
}