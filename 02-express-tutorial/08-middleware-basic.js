const express = require('express')
const app = express();

//req => middleware = res

//this will be the middleware function
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next(); //this makes sure that the program gets passed on to the next middleware
}

//the above function is being referenced in the parameters below
app.get('/',logger,(req, res) => {
    res.send('Home')
})
app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(5000, ()=> {
    console.log('Server is listening on port 5000...');
})