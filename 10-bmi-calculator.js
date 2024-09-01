// Function to calculate BMI
function calculateBMI(mass, height) {
    return mass / (height ** 2);
}

// Taking input from the user
let mass = parseFloat(prompt("Enter your mass in kilograms:"));
let height = parseFloat(prompt("Enter your height in meters:"));

// Calculating BMI
let bmi = calculateBMI(mass, height);

// Printing the BMI
console.log("Your BMI is:", bmi.toFixed(2));
