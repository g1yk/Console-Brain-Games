import { cons } from 'hexlet-pairs';
import game from '../core';
import randomInteger from '../utils';

const intro = 'Is the number prime? Answer "yes" or "no".';

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const description = () => {
  const num = randomInteger(1, 50);
  const question = num;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};


export default () => game(description, intro);
