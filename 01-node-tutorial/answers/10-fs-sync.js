//Synchronous Fs module
const {readFileSync, writeFileSync} = require('fs');
/*this is the same as:
const fs = require('fs');
fs.read
*/
console.log('start')
//Here is how to find a file and how to read its content:
    // the paramenters in the parentheses are the file path, and the encoding (utf8 is default)
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
//console.log(`${first}, and ${second}`);

//Here is how to create a file from scratch:
    //the paramenters are the file path, and the file content. 
    //(it overrides the file if it exists, and creates the file if it doesn't)
    //to add content to the file instead of overriding it, we add the 3rd parameter {flag: 'a'}
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});

console.log('done with this task');
console.log('starting the next one');