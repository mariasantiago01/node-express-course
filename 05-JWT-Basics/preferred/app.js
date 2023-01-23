require('dotenv').config();

const express = require('express')
const app = express();

const mainRouter = require('./routes/main')

app.use(express.json())

app.use('/api/v1', mainRouter)

const port = 5000;

const start = async () => {
    try {
        app.listen(port, () => 
            console.log(`server is listening on port ${port}...`)
        )
    } catch (error) {
        console.log(error);
    }
}
start();