// Array Methods
// As you work more and more with arrays, you'll start to discover other cool methods we can use for them!

// In this exercise, we will go over the .indexOf() and .includes() methods.

// # .indexOf()
// You may recall that we use the index to obtain the value of a given array element:

// const myArray = [1, 2, 3];

// console.log(myArray[1]); // Output: 2

// But what if we wanted to find out the index of a particular element's value? We can do that with the .indexOf() method:

// const stories = [
//   "Sorcerer's Stone",
//   "Chamber of Secrets",
//   "Prisoner of Azkaban",
//   "Goblet of Fire",
//   "Order of the Phoenix",
//   "Half-blood Prince",
//   "Deathly Hallows"
// ];

// console.log(stories.indexOf("Half-blood Prince")); // Output: 5

// If the array doesn't have the value we're looking for, -1 is returned instead.

// Note: If there are multiple elements with the same value in an array, the .indexOf() returns the index of the first occurrence of that value.

// # .includes()
// We can also check if an array contains a particular element value with the .includes() method:

// array.includes(value);

// The .includes() method checks if an element with the value parameter exists in the array, and returns a boolean true if it does or false otherwise. Here's an example:

// const myArray = [1, 2, 3];

// console.log(myArray.includes(3));
// console.log(myArray.includes(42));

// /*
// Output:
// true
// false 
// */




const characters = [
    "The Wally Watchers",
    "Wilma",
    "Fritz",
    "Wizard Whitebeard",
    "Odlaw",
    "Waldo",
    "Woof"
  ];
  
  let a = characters.indexOf("Waldo");
  if(a != -1){
    console.log("Found Waldo at index {" + a + "}.");
  } else{
    console.log("Not Found");
  }