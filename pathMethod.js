const path = require('path');

const jointPath = path.join('/a', 'b', 'c', 'd.js')
const basePath = path.basename(jointPath);
const absolute = path.resolve(__dirname)
console.log(absolute);