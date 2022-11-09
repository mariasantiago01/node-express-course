const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'john') { //in browser: localhost:5000?user=john 
        req.user = {name:'john', id: 3}
        next();
    } else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize;