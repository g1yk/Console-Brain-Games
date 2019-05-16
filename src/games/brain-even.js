#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import game from '../core';
import randomInteger from '../utils'

const isNumberEven = (num) => (num % 2 === 0) ? true : false

const description = () => {
  const question = randomInteger(0, 25);
  const correctAnswer = isNumberEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};
const intro = 'Answer "yes" if number even otherwise answer "no"';

export default () => game(description, intro);
