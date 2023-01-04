const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({msg: 'Unauthorized'})
    }

    const token = authHeader.split(' ') [1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {name} = decoded
        req.user = name
        next()

    } catch (error) {
        return res.status(401).json({msg: 'Unauthorized 1'})
    }
}

module.exports = authMiddleware