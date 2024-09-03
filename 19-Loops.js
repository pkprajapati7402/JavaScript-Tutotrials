// Simple demonstreation of wile loop
let randomNumber = Math.floor(Math.random() * 10);

while (randomNumber != 7) {
  console.log("Duck 🦆");
  randomNumber = Math.floor(Math.random() * 10);
}

console.log("Goose! 🦢");