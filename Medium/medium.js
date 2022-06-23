const fs = require('fs');
const planets = 'solarsystem.txt'

var read = fs.readFileSync(planets, 'utf8');

console.log(read)