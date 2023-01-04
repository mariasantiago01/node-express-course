// check username, password in post(login) request
// if it exists create a new JSON Web Token
// then send it to the front-end as it needs it in toder to send the get request

// set up authentication so only the JSON Web Token can access the dashboard
const jwt = require('jsonwebtoken')
const  {BadRequestError} = require('../errors')

const login = async (req, res) => {
    const {username, password} = req.body

    //mongoose validation - mongo checks it for us 
    //use Joi package
    //check for both usrname and password manually in the controller

    if(!username || !password) {
        throw new BadRequestError('Please provide email and password.')
    }

    //just for demo, use long, complex, unguessable strings. 
    const id = new Date().getDate()

    //you can put whatever you want in the sign object
    //keep payload small, better experience for the user
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'})

    res.status(200).json({msg:'user created', token})
}

const dashboard = async (req, res) => {
     const luckyNumber = Math.floor(Math.random()*100)

    res.status(200).json({
        msg: `Hello, ${req.user.username}`, 
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
    })

}
    

module.exports = {
    login, dashboard
}