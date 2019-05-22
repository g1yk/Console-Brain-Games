import { cons } from 'hexlet-pairs';
import game from '../core';
import randomInteger from '../utils';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const description = () => {
  const num1 = randomInteger(0, 50);
  const num2 = randomInteger(0, 50);
  const question = `${num1}, ${num2}`;
  const correctAnswer = gcd(num1, num2);

  return cons(question, correctAnswer.toString());
};
const intro = 'Find the greatest common divisor of given numbers.';


export default () => game(description, intro);
