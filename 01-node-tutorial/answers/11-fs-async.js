//Asynchronous Fs module
const {readFile, writeFile} = require('fs')

//we need a provide a callback as a parameter, so that it runs after we are done with the function
//we also add the utf8 as a parameter so that we dont get a numeric buffer instead of the alphabetic txt content
console.log('start')
readFile('./content/first.txt', 'utf8', (err,result) => {
    if (err) {
        console.log(err)
        return 
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result) => {
        if (err) {
            console.log(err)
            return 
        } 
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first} and ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            //console.log(result)
            console.log('done with this task')
        })
 })}
 )
 console.log('starting next task')