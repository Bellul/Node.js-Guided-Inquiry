const fs = require('fs')

const io = fs.readFileSync(process.argv[2]);

const output = io.toString().split('\n').length - 1;

console.log(output);