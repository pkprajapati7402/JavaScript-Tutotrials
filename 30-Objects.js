/*
 Objects
In real life, everything around you is an object with certain traits and possible behaviors.

Some of JavaScript's core data types include numbers and strings. In this chapter, you'll be introduced to a new data type: objects!

Objects are used for storing multiple values in a single variable. They are usually key:value pairs where the key and the value are separated by a : colon sign.

object = {
  key1: value1,
  key2: value2,
  key3: value3
}

Here's an example:

const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937
}

Yes, you can even store methods inside of objects! We'll explore that more in a later exercise.

Instructions
Let's demonstrate the usefulness of objects using two pizzas:

// Pizza 1

const pizzaTopping = "Cheese 🧀";
const pizzaType = "Pan";
const pizzaSlices = 8;
const pizzaPrice = 12.99;

// Pizza 2 

const pizza = {
  topping: "Pepperoni 🍕",
  type: "Hand-tossed",
  slices: 12,
  price: 14.99
}

console.log(pizza);

In the code above, you'll find that while we could define each piece of data in its own variable, objects make it easier to organize this data into a single collection and store it in a single variable.

If you run this code, it will log the following:

{
  topping: 'Pepperoni 🍕', 
  type: 'Hand-tossed', 
  slices: 12, 
  price: 14.99
}
*/

const pizza = {topping: "Pepproni",
type: "Hand-Tossed",
slices: 12,
price: 14.99
}
console.log(pizza);
