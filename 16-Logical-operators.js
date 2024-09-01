// One more thing that we should learn is logical operators.

// As your if/else if/else statements get bigger and more complex, so do the conditionals!

// We already learned to evaluate conditions with comparison operators like > and <. But we can go further and combine conditions with logical operators.

// Logical operators, also known as Boolean operators, combine and evaluate two conditions. They are &&, ||, and ! operators:

// The AND logical operator && returns true if both conditions are true, and returns false otherwise.
// The OR logical operator || returns true if at least one of the conditions is true, and false otherwise.
// The NOT logical operator ! returns true if the condition is false, and vice versa.
// Here are some examples:

// if (hunger > 4 && anger > 1) {
//   console.log("Hangry");
// }

// If the hunger variable is greater than 4 and the anger variable is greater than 1, then the program prints "Hangry".

// if (coffee > 0 || bubble_tea > 0) {
//   console.log("😊");
// }

// If the coffee variable is greater than 0 or the bubble_tea variable is greater than 0, then the program prints a smiley face.

// if (!tired) {
//   console.log("Let's code!");
// }

// If the tired variable is not true, then the program prints "Let's code!"

// So you might be wondering: && and || are awfully similar, how do I remember the differences between the two?

// A	B	A && B	A || B
// false	false	false	false
// false	true	false	true
// true	false	false	true
// true	true	true	true



// In summer 2023, the smoke from wildfires in Canada raised concerns about the Air Quality Index (AQI) in one's area.

// Create an air-quality-index.js program.

// Google the AQI in your area and define an aqi variable with that number.

// Write an if/else if/else statement with the following logic:

// If aqi is between 0 and 50, print “Good”.
// Else if aqi is between 51 and 100, print "Moderate".
// Else if aqi is between 101 and 150, print "Unhealthy (Sensitive Groups)".
// Else if aqi is between 151 and 200, print "Unhealthy".
// Else if aqi is between 201 and 300, print “Very Unhealthy”.
// Else, print “Hazardous”.




const aqi = 71;
if(aqi > 0 && aqi < 50){
    console.log("Good");
} else if(aqi < 100 && aqi >=51){
    console.log("Moderate");
} else if(aqi < 150 && aqi >= 101){
    console.log("Unhealthy (Sensitive group");
} else if(aqi < 200 && aqi >= 151){
    console.log("Unhealthy");
} else if(aqi < 300 && aqi >= 201){
    console.log("Very Unhealthy");
} else {
    console.log("Hazardous");
}