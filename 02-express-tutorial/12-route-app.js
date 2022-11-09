const express = require('express')
const app = express();

const auth = require('./routes/auth')
const people = require('./routes/people')

//  static assets
app.use(express.static('./methods-public'))
//  parse form data, to add the values to req.body
app.use(express.urlencoded({extended: false})) //middleware function in express
//  parse json
app.use(express.json())

app.use('/login', auth)
app.use('/api/people', people)

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})