const jwt = require('jsonwebtoken')

const logon = async (req,res) => {
    const {name, password} = req.body

    const token = jwt.sign({name}, process.env.JWT_SECRET, {expiresIn: process.env.LIFETIME})

    res.status(200).json({token})
}

const dashboard =  async (req, res) => {
    res.status(200).json({msg: `Hi ${req.user}, you have been authorized`})
}

module.exports = {
    logon, 
    dashboard
}