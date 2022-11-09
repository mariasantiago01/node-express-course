const consoleLog = (req, res, next) => {
    console.log('here is a statement');
    next();
}

module.exports = consoleLog;