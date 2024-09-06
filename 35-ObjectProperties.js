// Updating Properties
// For objects, we can change an existing property and assign a new value:

// const user = {
//   username: "@emmachamberlain",
//   location: "Los Angeles, CA",
//   followers: 15725078,
//   following: 3, 
//   verified: false
// };

// user.verified = true;
// user.location = "🌐";

// console.log(user);

// Here, the user got verified and updated thier location.

// The output would now look like:

// {
//   username: '@emmachamberlain',
//   location: '🌐',
//   followers: 15725078,
//   following: 3,
//   verified: true
// }

// # Adding New Properties
// Another thing we can do with dot notation is assign a brand new property to an existing object.

// Take this fruit object for example:

// const fruit = {
//   name: "apple",
//   quantity: 10,
// }

// console.log(fruit);

// // Output: {name: 'apple', quantity: 10}

// We can create and assign a new property to it:

// fruit.organic = true;

// console.log(fruit);

// // Output: {name: 'apple', quantity: 10, organic: true}

// Instructions
// Let's practice adding and updating properties with the following pokemon object:

// pokemon = {
//   name: "Pikachu",
//   type: "Electric ⚡️",
//   level: 25,
// }

// First, define a new .isCaught property with a value of false.

// Next, log the pokemon object to ensure the new property was added.

// Yay! You caught the Pokémon! Let's change the following properties:

// Change .isCaught to true.
// Nickname your newly caught Pokémon by changing the value of name.
// Finally, log the updated pokemon object to the console.


const pokemon = {
    name: "Pikachu",
    type: "Electric",
    level: 25,
  }
  pokemon.isCaught = false;
  console.log(pokemon);
  
  // changing isCaught.
  pokemon.isCaught = true;
  pokemon.name = "Chikopu";
  console.log(pokemon);