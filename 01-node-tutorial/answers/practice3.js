//assignment 2
const { writeFile } = require('fs').promises;

const makeFile = async() => {
    try {
        await writeFile('01-node-tutorial/answers/content/practice2.txt', 
        `This is the first line.\n`)
        for (let i = 2; i <= 10 ; i++) {
            writeFile('01-node-tutorial/answers/content/practice2.txt', 
            `This is line ${i}.\n`, {flag: 'a'})
        }
    } catch (error) {
        console.log(error)
    }
}
makeFile()