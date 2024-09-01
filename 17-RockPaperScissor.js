
// 0 = rock, 1 = paper, 2 = scissor
const play = Math.floor(Math.random() * 3);
let comp = Math.floor(Math.random() * 3);
let v1, v2;
if(play === 0 ){
  v1 = "Rock";
} else if(play === 1){
  v1 = "Paper";
} else{
  v1 = "Scissor";
}

if(comp === 0 ){
  v2 = "Rock";
} else if(comp === 1){
  v2 = "Paper";
} else{
  v2 = "Scissor";
}
console.log("Player Picked: ", v1);
console.log("Coputer Picked: ", v2);
console.log("\n");

if(play == comp){
  console.log("Draw");
} else if( (play === 0 && comp === 2) || (play === 1 && comp === 0) || (play === 2 && comp === 1)){
  console.log("Player Won!");
} else{
  console.log("Computer Won");
}