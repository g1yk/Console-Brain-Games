#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import game from '../core';
import randomInteger from '../utils';

const description = () => {
  const firstNumber = randomInteger(1, 11);
  const step = randomInteger(1, 11);
  const numbersLength = 10;
  const missedNumber = randomInteger(1, 10);
  let question = '';
  let correctAnswer = '';
  let element = 0;
  for (let position = 0; position < numbersLength; position += 1) {
    element = firstNumber + step * position;
    if (position === missedNumber) {
      question += '.. ';
      correctAnswer = element.toString();
    } else {
      question += `${element} `;
    }
  }
  return cons(question, correctAnswer);
};

const intro = 'What number is missing in this progression?';

export default () => game(description, intro);
