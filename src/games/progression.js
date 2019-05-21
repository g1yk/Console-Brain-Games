import { cons } from 'hexlet-pairs';
import game from '../core';
import randomInteger from '../utils';

const numbersLength = 10;

const description = () => {
  const firstNumber = randomInteger(1, 11);
  const step = randomInteger(1, 10);
  
  const hiddenElementPosition = randomInteger(1, numbersLength - 1);
  let question = '';
  const correctAnswer = String(firstNumber + step * hiddenElementPosition);
  for (let position = 0; position < numbersLength; position += 1) {
   let element = firstNumber + step * position;
    if (position === hiddenElementPosition) {
      question += '.. ';
    } else {
      question += `${element} `;
    }
  }
  question = question.trim();
  return cons(question, correctAnswer);
};

const intro = 'What number is missing in this progression?';

export default () => game(description, intro);
