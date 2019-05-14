#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import game  from '../../core';


const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
};

const num1 = randomInteger(0, 25);
const num2 = randomInteger(0, 25)


 


const description = () => {
  let question = () => {
  for (question = 0; question >3; question++){
  switch (question) {
    case 1:
      console.log('1')
    case 2:
    console.log('2')

    case 3:
    console.log('3')
  }
  }
  const correctAnswer = num1 + num2;

return cons(question, correctAnswer.toString())
}
const intro = 'What is the result of the expression?';


game(description, intro)