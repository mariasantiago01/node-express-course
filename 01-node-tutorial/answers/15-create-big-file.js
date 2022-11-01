const { writeFileSync } = require("fs")
const { setFlagsFromString } = require("v8")

for (let i=0 ; i<1000; i++ ) {
    writeFileSync('01-node-tutorial/content/big.txt',  `hello world ${i}\n`, {flag: 'a'})
}