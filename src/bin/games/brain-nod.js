import { cons } from 'hexlet-pairs';
import game from '../../core';

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

const description = () => {
  const num1 = randomInteger(0, 50);
  const num2 = randomInteger(0, 50);
  const gcd = (a, b) => {
    if (!b) {
      return a;
    }
    return gcd(b, a % b);
  };
  const question = `${num1}, ${num2}`;
  const correctAnswer = gcd(num1, num2);

  return cons(question, correctAnswer.toString());
};
const intro = 'Find the greatest common divisor of given numbers.';


game(description, intro);
