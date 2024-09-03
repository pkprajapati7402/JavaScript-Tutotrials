// # Index
// Okay, so we now know how to create an array and store data in it. But how can we access and change the elements within it?

// To access a single element in an array, we use bracket notation! For example:

// let fruits = ["strawberries 🍓", "blueberries 🫐", "bananas 🍌"];

// console.log(fruits[0]);

// The code above uses bracket notation to retrieve the value of the first element of the fruits array. But wait… if this is the first element, then why are we using 0?

// Array indices start at 0, not 1. You'll come to find that this is the case for most programming languages!

// We can also use bracket notation to change the value of an existing element:

// let pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

// pokemon[2] = "Pikachu";

// console.log(pokemon);
// // Output: ["Bulbasaur", "Charmander", "Pikachu"]

// We can also use it to assign a new value to an index that doesn't yet exist! The following example adds a new element to the end of the array:

// let numbers = [1, 2, 3];

// numbers[3] = 4;

// console.log(numbers);
// // Output: [1, 2, 3, 4]

// Note: Be careful when creating new elements like this, for you may end up creating undefined elements between the old last element and the new last element:

// let numbers = [1, 2, 3];

// numbers [5] = 88;

// console.log(numbers);
// // Output: [1, 2, 3, undefined, undefined, 88]


let groceryList = ["Milk", "Avocado", "Eggs", "Bread"];
groceryList[2] = "Butter";
groceryList[4] = "Laundry Soap";
console.log(groceryList);