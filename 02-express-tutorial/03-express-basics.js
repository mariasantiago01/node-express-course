const express = require('express');
const app = express()

app.get('/',(req, res) => {
    console.log('user hit the resource');
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

//this one handles all requests (post, get, ect)
app.all('*',(req, res) => {
    res.status(404).send('<h1> resource not found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000');
})

//The below is what the user is trying to do
//app.get = read data
//app.post = insert data
//app.put = update data
//app.delete = delete data
//app.all = works with all of them
//app.use
//app.listen