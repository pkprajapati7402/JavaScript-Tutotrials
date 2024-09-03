// # continue
// JavaScript provides a few keywords that let us navigate loops in cool ways.

// First, we have the continue keyword. If a given condition is true, the continue keyword ends the current iteration in a given for or while loop and we go to the next one.

// for (let i = 0; i < 5; i++) {
//   if (i == 1) {
//     continue;
//   }
//   console.log(i);
// }

// The code above will output the numbers 0 through 4, except for 1 because the continue skips this iteration.

// 0
// 2
// 3
// 4

// # break
// The other keyword that lets us end our loops early is the break keyword.

// If a given condition in a loop is true, this keyword ends the loop altogether and the program resumes on the line immediately after the closing curly bracket of the loop.

// for (let i = 0; i < 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

// If and when i is equal to 3, the break keyword ends the loop, and our output looks like this:

// 0
// 1
// 2

// Write code below 

for(let i = 1; i <= 50; i++){
    if(i % 2 != 0){
      continue;
    }
    if(i === 42){
      console.log(i);
      break;
    }
    console.log(i);
  }