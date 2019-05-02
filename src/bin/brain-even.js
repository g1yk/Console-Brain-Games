#!/usr/bin/env node

const readlineSync = require('readline-sync');
/*
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');
*/

 
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even. Otherwise answer "no".');
  console.log(' ');
};


// Check if number is even
const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return true
  }
  return false
};
// Gives random number
const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}
// Returns Correct or not
const anwer = (answer) => {
  if (answer === 'yes' && rand === true) {
    return console.log('Correct!')
  } else {
    return console.log('Wrong!')
  }
}
const question = () => {
  let points = 0
  for (let i = 0; i < 3; i++) {
    let num = randomInteger(1, 100)
    let questionWithNumber = readlineSync.question(`\nQuestion: ${num}\nYour answer:`)
    if (questionWithNumber === 'yes' && isNumberEven(num) === true) {
      console.log('Correct!')
      points += 1
    } else if (questionWithNumber === 'no' && isNumberEven(num) === false) {
      console.log('Correct!')
      points += 1
    } else if (questionWithNumber === 'yes' && isNumberEven(num) === false) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again ${userName}!`)
    } else if (questionWithNumber === 'no' && isNumberEven(num) === true) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again ${userName}!`)
    } else {
      console.log(`You can answer only 'yes' or 'no'.\nLet's try again ${userName}!`)
    }
  }
   if (points === 3) {
      console.log(`\nCongratulations, ${userName}!`)
    }
}

greeting();
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

question();
//'yes' is wrong answer ;(. Correct answer was 'no'.
//Let's try again, Bill!