#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import game from '../../core';


const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

const description = () => {
  const sign = randomInteger(1, 4);
  const num1 = randomInteger(0, 25);
  const num2 = randomInteger(0, 25);

  let question;
  let correctAnswer;

  switch (sign) {
    case 1:
      question = `${num1} + ${num2}`;
      correctAnswer = num1 + num2;
      break;
    case 2:
      question = `${num1} - ${num2}`;
      correctAnswer = num1 - num2;
      break;
    default:
      question = `${num1} * ${num2}`;
      correctAnswer = num1 * num2;
      break;
  }


  return cons(question, correctAnswer.toString());
};
const intro = 'What is the result of the expression?';


game(description, intro);
