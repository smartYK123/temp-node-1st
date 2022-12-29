
const os = require("os")

// info about the current user
 const user = os.userInfo()
 console.log(user)

 // method returns the system uptime in a seconds
 console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name : os.type(),
    release: os.release(),
    totalMemo : os.totalmem(),
    freeMemo : os.freemem()
}
console.log(currentOs)




