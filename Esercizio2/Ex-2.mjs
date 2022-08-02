// Use the Node.js REPL to list the methods provided by the Node.js core crypto module. Use one of these methods to generate a random ID.

import crypto from 'crypto';

const newID = crypto.randomUUID();
console.log(newID);