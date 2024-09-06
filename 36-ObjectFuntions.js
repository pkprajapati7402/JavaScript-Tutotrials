/*
Object Methods
In addition to housing raw data values, objects can also store functions as values! Whoa... 🤯

A function that is inside an object is referred to as a method. Check out this phone object that features a ringtone property:

const phone = {
  model: "iPhone 11 Pro Max",
  brand: "Apple",
  version: 11.6,
  owner: "John Appleseed",
  ringtone: function () {
    console.log("Ring, ring! Ring, ring! 📲")
  }
}

phone.ringtone();
// Output: Ring, ring! Ring, ring! 📲

The ringtone property is a method and you tell it by the use of the function keyword, with parentheses.

The syntax is a little weird (function () {...}). But that's ok; the method's name is the same as the property name!

However, you can store methods in objects another way:

const phone = {
  model: "Android",
  brand: "Samsung",
  version: 16.1,
  owner: "Jane Doe",
  ringtone () {
    console.log("Ring, ring! Ring, ring! 📲")
  }
}

phone.ringtone();
// Output: Ring, ring! Ring, ring! 📲

Here, we are sort of combining the key:value pair into one statement for the ringtone() method. This is actually the syntax that most programmers use.

Note: But remember, the key:value pair is still there. ringtone is the key and the method body () { ... } is the value.

Instructions
Let's go to the farm! Look at all the animals! 🧑‍🌾

For this exercise, create three objects for three farm animals: pig, sheep, and dog.

Each object should have the following properties:

A .name, set to a string.
A .type, set to a string of either "pig", "sheep", or "dog".
An .age, set to an integer.
A .makeSound() method that returns a string of the sound it makes (specific to the animal).
The .makeSound() method should return a string featuring the other properties, and looks like the following:

Benny is a 10 year old dog that goes woof!

*/





const pig = {
    name: "Suar",
    type: "Pig",
    age: 5,
    makeSound (){
      console.log("Sua Sua");
    }
  }
  const sheep = {
    name: "Bobby",
    type: "sheep",
    age: 3,
    makeSound (){
      console.log("Mee Mee");
    }
  }
  const dog = {
    name: "Kutta",
    type: "dog",
    age: 6,
    makeSound: function () {
      console.log("bhow bhow");
    }
  }
  
  console.log(dog.name, " is a ", dog.age, dog.type, " that goes ", dog.makeSound());