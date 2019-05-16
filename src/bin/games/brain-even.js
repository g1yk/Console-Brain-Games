#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import game from '../../core';

const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};


const description = () => {
  const question = randomInteger(0, 25);
  const correctAnswer = isNumberEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};
const intro = 'Answer "yes" if number even otherwise answer "no"';


game(description, intro);
