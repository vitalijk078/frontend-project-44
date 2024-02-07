#!/usr/bin/env node
import readlineSync from 'readline-sync'; 
import greeting from '../src/cli.js';

const userName = greeting();

console.log('What is the result of the expression?');


function generateQuestion() {
    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b
    };
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const operation = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = String(operations[operation](num1, num2));
    return { question, correctAnswer };
  }
  
  function main() {
  
    for (let i = 0; i < 3; i++) {
      const { question, correctAnswer } = generateQuestion();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question("Your answer:");
      if (userAnswer === correctAnswer) {
        console.log("Correct!");
      } else {
        console.log(`Sorry, ${userAnswer} is wrong. Correct answer was ${correctAnswer}.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  
    console.log(`Congratulations, ${userName}!`);
  }
  
  main();
  
  
