// Assignment 1:
const mySentence = require('./practice2.js')
const os = require('os')
const {writeFile} = require('fs')
const sentence = require('./practice2.js')

const user = os.userInfo().username

writeFile('01-node-tutorial/answers/content/practice.txt',`"${mySentence}" by ${user}`, (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(result);
})
