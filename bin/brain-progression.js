#!/usr/bin/env node
import gameBody from '../src/GameBody.js';

import task from '../src/game/progression.js';

const description = 'What number is missing in the progression?';

gameBody(description, task);
