const express = require('express')
const app = express()
const consoleLog = require('./practice-middleware')

app.use(consoleLog)

app.use(express.static('./new-public'))

app.get('/sample', (req, res) => {
    res.send('This is working')
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})