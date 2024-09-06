// Congrats!
// Congratulations on reaching the end of another chapter! 🎊

// Functions are a concept that trips up a lot of people, so definitely practice and practice. 💪

// In this chapter, we learned the following:

// What functions are in JavaScript and why they're useful.
// How to define functions with the function keyword.
// How to produce results from the function with the return keyword.
// How parameters and arguments play a role in the definitions and execution of function.
// How variables defined within a function have a limited scope, and global variables are not limited in scope.
// Here's the function structure in case you forgot:

// function nameOfFunction(parameter1, parameter2) {
//   // The code inside
//   return value;
// }

// Instructions
// Have you ever noticed how some words read the same forwards and backwards, like "noon" or "radar". These are known as palindromes!

// Let's create an isPalindrome() function that does the following:

// It accepts a word string as a parameter.
// The function returns true if the word is a palindrome. Otherwise, it returns false.
// Note: If there are any capital letters in word, use word.toLowerCase() to make it all lowercase. More info about this method here.

// After defining this function, go ahead and call it a few times on some words to see the results! Here are some words to try out:

// "racecar"
// "madam"
// "moonlight"
// "aviary"


let a = "Hello";
let b = a.split('').reverse().join('');
if(a === b){
    console.log("Yes It's Palindrome");
} else{
    console.log("No it's not!");
}