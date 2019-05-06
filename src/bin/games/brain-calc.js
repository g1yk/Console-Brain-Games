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

 
const greeting = (greet) => {
  console.log('Welcome to the Brain Games!');
  console.log(greet);
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

greeting('What is the result of the expression?');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);


const addiction = () => {

    let num = randomInteger(1, 25)
    let num2 = randomInteger(1, 25)
    let result = num + num2
    let questionToCalc = readlineSync.question(`\nQuestion: ${num} + ${num2}\nYour answer:`)
    if (questionToCalc == result) {
      console.log('Correct!')
      return true
    } else {
      console.log(`${questionToCalc} is wrong answer ;(. Correct answer was ${result}.`)
      return false
    }
}

const substraction = () => {

    let num = randomInteger(1, 25)
    let num2 = randomInteger(1, 25)
    let result = num - num2
    let questionToCalc = readlineSync.question(`\nQuestion: ${num} - ${num2}\nYour answer:`)
    if (questionToCalc == result) {
      console.log('Correct!')
      return true
    } else {
      console.log(`${questionToCalc} is wrong answer ;(. Correct answer was ${result}.`)
      return false
    }
}

const multiply = (answer) => {
  let points = 0
    let num = randomInteger(1, 9)
    let num2 = randomInteger(1, 25)
    let result = num * num2
    let questionToCalc = readlineSync.question(`\nQuestion: ${num} * ${num2}\nYour answer:`)
    if (questionToCalc == result) {
      console.log('Correct!')
      return true
    } else {
      console.log(`${questionToCalc} is wrong answer ;(. Correct answer was ${result}.`)
      return false
    }
}
const playCalcThreeRounds = () => {
  let points = 0
  if (addiction() === true) {
    points += 1
  }
  if (substraction() === true) {
    points += 1
  }
  if (multiply() === true) {
    points += 1
  }
  if (points === 3) {
      console.log(`\nCongratulations, ${userName}!`)
    } else {
      console.log(`Try again ${userName}`)
    }
}
playCalcThreeRounds()
