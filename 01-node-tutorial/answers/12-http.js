//http
const http = require('http');

//the parameters are objects, one is req = incoming requests, and res= what we are sending back
const server = http.createServer((req, res) => {
    if (req.url ==='/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`
    )
    }
})

//what port our server will be listening to 
server.listen(5000);