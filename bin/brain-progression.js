#!/usr/bin/env node
import gameBody from '../src/GameBody.js';

const description = 'What number is missing in the progression?';

const task = () => {
  const arrayLength = Math.floor(Math.random() * 5) + 5; // случайная длина массива
  const progressDelta = Math.round(Math.random() * 10); // шаг прогрессии
  const firstNumber = Math.round(Math.random() * 100); // начальное значение прогрессии
  const progression = [];
  progression.push(firstNumber);
  for (let i = 1; i < arrayLength; i += 1) {
    progression.push(progression[i - 1] + progressDelta); // наполяем массив прогрессии
  }
  const emptyIndex = Math.floor(Math.random() * arrayLength); // индекс числа, кот выкинем
  const answer = `${progression[emptyIndex]}`;
  progression[emptyIndex] = '..';
  return [progression.join(' '), answer];
};

gameBody(description, task);
