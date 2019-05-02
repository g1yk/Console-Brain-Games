#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {greeting, question} from '../index';


greeting();
export const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
question();
