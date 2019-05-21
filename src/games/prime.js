import { cons } from 'hexlet-pairs';
import game from '../core';
import randomInteger from '../utils';

const intro = 'Is the number prime? Answer "yes" or "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let count = 2; count < number; count += 1) {
    if (number % count === 0) {
      return false;
    }
  }
  return true;
};

const description = () => {
  const num = randomInteger(1, 50);
  const question = num;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};


export default () => game(description, intro);
