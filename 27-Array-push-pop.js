// Adding Elements
// As we learned previously, you can use an array index for an existing element to replace the value for that element:

// const bandMembers = ["J.C.", "Joey", "Chris", "Lance", "Justin"];

// bandMembers[1] = "Nick";

// console.log(bandMembers);
// // Output: ["J.C.", "Nick", "Chris", "Lance", "Justin"]

// Additionally, you can add more elements to your arrays with built-in methods.

// Methods are pieces of code that some variables can use to perform specific actions, like produce a new value. We refer to them with dot notation, similar to the .length property.

// Note: The first method we encountered was console.log() from Chapter 1.

// For example, you can add new elements to the beginning and end of an array with the .unshift() and .push() methods, respectively:

// myArray.unshift(newValue);

// myArray.push(newValue);

// The newValue is known as a parameter that we pass into the method. Some methods use parameters while others do not.

// You can also add multiple elements with the .push() and .unshift() methods by separating each new value with a comma (i.e., .push(newValue1, newValue2);).

// Note: For every new element added to an array with the .unshift() method, the indices of the other elements are shifted up by 1.

// # Removing Elements
// Not only can we add elements to an array, we can also remove them as well with the .shift() and .pop() methods.

// The .shift() method removes and returns the first element in an array, shifting the indices of the remaining elements back by 1.

// Conversely, the .pop() method removes and returns the last element of an array:

// const greeks = ["Zeus", "Hera", "Poseidon", "Apollo", "Hermes", "Dionysus", "Hades"];

// const shiftedElement = greeks.shift();
// const poppedElement = greeks.pop();

// console.log(shiftedElement);
// console.log(poppedElement);
// console.log(greeks);

// /*
// Output:
// Zeus
// Hades
// ["Hera", "Poseidon", "Apollo", "Hermes", "Dionysus"]
// */

// Note: By "returns", we mean that greeks.shift() produces a single value, the removed first element, that can be used elsewhere in the program (such as being printed or stored in a variable).

// Instructions


const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
];

// Removing first element.
musicPlaylist.shift();
console.log(musicPlaylist);
// Removing last element.
musicPlaylist.pop();
console.log(musicPlaylist);

// Adding new element.
musicPlaylist.push("New1");
console.log(musicPlaylist);


// Two elements at the begining.
musicPlaylist.unshift("add1first");
musicPlaylist.unshift("add2first");

console.log(musicPlaylist);