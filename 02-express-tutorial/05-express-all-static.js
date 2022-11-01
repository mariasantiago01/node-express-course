const express = require('express');
const path = require('path')
const app = express()

//setup static middleware, we use app.use for this
//static asset is used for a file that the server doesn't have to change
//we create a folder called public, and move all the files to it
app.use(express.static('./public'))

//we wante to send the file index.html, and we need to provide an absolute path (use path module)
// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//      adding to staic assets
//      SSR - server side rendering
//      index.html will always be a root when added to a staic asset
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})