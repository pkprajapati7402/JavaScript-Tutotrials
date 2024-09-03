// Js program to convert Integer number into respective binary number.

//

let n = 23;
let temp = n;
let bin = '';
let pos = 1;

while(n != 0){
    let rem = n % 2;
    bin = rem + bin; 
    n = Math.floor(n / 2); 
}

console.log("Binary of", temp, "is", bin);