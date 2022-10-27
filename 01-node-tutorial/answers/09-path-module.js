const path = require('path');

console.log(path.sep);

//to get a path based on the given filenames
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath)

//to get the base directory 
const base = path.basename(filePath);
console.log(base);

//for full directory path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); 
console.log(absolute);