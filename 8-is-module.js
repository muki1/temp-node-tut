const os = require("os")

// Info about current user
const user = os.userInfo()

// Method returns the system uptimein seconds
console.log("The System Uptime is " + os.uptime() + " seconds")

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)