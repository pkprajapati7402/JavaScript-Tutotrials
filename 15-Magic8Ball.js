// The Magic 8 Ball is a popular office toy and children's toy invented in the 1940's for fortune-telling and advice seeking. 🎱

// It's an oversized 8 ball with some of the following answers:

// Yes - definitely.
// It is decidedly so.
// Without a doubt.
// Reply hazy, try again.
// Ask again later.
// Better not tell you now.
// My sources say no.
// Outlook not so good.
// Very doubtful.
// Create a magic8.js program that can respond to any Yes or No questions with a different answer each time it executes.

// The output should have the following format:

// Question:       [Question]
// Magic 8 Ball:   [Answer]

// For example:

// Question:       Is Codédex better than Udemy yet?
// Magic 8 Ball:   Better not tell you now.


const question = "Your Question here"

const randomNumber = Math.floor(Math.random() * 9) + 1

let answer = ""

if (randomNumber == 1){
  answer = 'Yes - definitely';
} else if (randomNumber == 2) {
  answer = 'It is decidedly so'
} else if (randomNumber == 3) {
  answer = 'Without a doubt'
} else if (randomNumber == 4) {
  answer = 'Reply hazy, try again'
} else if (randomNumber == 5) {
  answer = 'Ask again later'
} else if (randomNumber == 6) {
  answer = 'Better not tell you now'
} else if (randomNumber == 7) {
  answer = 'My sources say no'
} else if (randomNumber == 8) {
  answer = 'Outlook not so good'
} else if (randomNumber == 9) {
  answer = 'Very doubtful'
} else {
  answer = 'Error'
}

console.log("Question: ", question);
console.log("Answer:   ", answer);
  