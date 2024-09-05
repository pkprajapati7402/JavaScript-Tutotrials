/*
Properties
In the last exercise, we displayed an entire object along with its key:value pairs.

But what if we just wanted to display a single value from the object? We can do this by referring to one of the object's properties.

A property is the same thing as the key:value pair of an object.

Here is an example of properties in action:

const stadium = {
  name: "Dodger Stadium",
  location: "Los Angeles, CA",
  capacity: 56000,
  soldOut: false
};

This stadium object has four properties:

.name
.location
.capacity
.soldOut
# Dot Notation
We can access the value of a single property is with a period, or dot:

console.log(stadium.name);    // Dodger Stadium

As long as the property exists, we can access its value. Otherwise, we will get undefined:

console.log(stadium.events);  // undefined

Instructions
Let's use object properties and dot notation to design your dream car! 🚗💨

First, create a new car object:

const car = { };

Then, use dot notation to add the following properties:

A .model (string) property, such as "Tesla" or "Honda".
A .year (integer) property for when the car was made.
A .color (string) property of the car.
A .used (boolean) property that can either be true or false.
Lastly, log a string message to the console that includes the properties you defined for the car object:

I'm looking for a 2024 Honda that is used.

If the .used property is false, the message should say the following:

I'm looking for a 2024 Honda that
*/


const car = {
model: "Tesla",
year: 2024,
color: "Black",
used: true
};

console.log("I'm looking for a " + car.year + car.model + " that is used.");
