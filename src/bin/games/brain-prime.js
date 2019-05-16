#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import game from '../../core';
import randomInteger from '../../utils'

const intro = 'Is the number prime? Answer "yes" or "no".';

const isPrime = (number) => {
  if (number === 1) {
    return 'no';
  }
  if (number === 2) {
    return 'yes';
  }
  for (let count = 2; count < number; count += 1) {
    if (number % count === 0) {
      return 'no';
    }
    return 'yes';
  }
  return 'yes';
};

const description = () => {
  const num = randomInteger(1, 50);
  const question = num;
  const correctAnswer = isPrime(num);

  return cons(question, correctAnswer);
};


game(description, intro);
