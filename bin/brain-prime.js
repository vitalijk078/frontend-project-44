#!/usr/bin/env node
import gameBody from '../src/GameBody.js';

import task from '../src/game/prime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameBody(description, task);
