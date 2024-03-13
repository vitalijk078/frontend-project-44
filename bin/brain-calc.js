#!/usr/bin/env node
import gameBody from '../src/GameBody.js';

import task from '../src/game/calc.js';

const description = 'What is the result of the expression?';

gameBody(description, task);
