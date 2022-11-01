//used for big files
const {createReadStream} = require('fs')

const stream = createReadStream('01-node-tutorial/content/big.txt')

stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => {
    console.log(err)
})