#!/usr/bin/env node
import gameBody from '../src/GameBody.js';

import task from '../src/game/gcd.js';

const description = 'Find the greatest common divisor of given numbers';

gameBody(description, task);
