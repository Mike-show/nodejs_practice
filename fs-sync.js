const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('1.txt', 'utf8');
const second = readFileSync('2.txt', 'utf8');
writeFileSync(
    '3.txt', 
    `${first}${second}`,
    {flag: 'a'}  
)
