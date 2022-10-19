const os = require('os'); //os = operating system, which is in the built in manual

//info about current user
const user = os.userInfo(); // we want to invoke the user info
console.log(user);

//method returns the system uptime in seconds by using the uptime method
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS =  {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);