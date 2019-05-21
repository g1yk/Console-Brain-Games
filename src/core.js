#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const rounds = 3;

const game = (description, intro) => {
  console.log('Welcome to the Brain Games!');
  console.log(intro);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  for (let n = 0; n < rounds; n += 1) {
    const gameCheck = description();
    const question = car(gameCheck);
    const rightAnswer = cdr(gameCheck);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer. Correct answer is ${rightAnswer}`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
