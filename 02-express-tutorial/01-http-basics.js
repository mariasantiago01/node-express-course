const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url); // or req.method
    const url = req.url;
    //home page
    if(url === '/') {
        res.writeHead(200, {'content-type':'text/html'}) // 200 is the status code (OK)
        //the content type will be html text when declared as 'text/html'.
        //if declared as 'text/plain', it will be basic text.
        res.write('<h1>home page</h1>')
        res.end()//always needs to be called

        //about page
    } else if (url == '/about') {
        res.writeHead(200, {'content-type':'text/html'}) 
        res.write('<h1>about page</h1>')
        res.end()
        //404
    } else {
        res.writeHead(404, {'content-type':'text/html'}) 
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)