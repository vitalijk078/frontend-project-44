#!/usr/bin/env node
import gameBody from '../src/GameBody.js';

import task from '../src/game/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

gameBody(description, task);
