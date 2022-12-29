// const amount = 9;
// if (amount < 12){
//     console.log("not bad");
//     }else {
//         console.log("very good")
//     }
//     console.log (`hey its a new node application`)
 
// const aina = "aina";
// const john = "john";
// const age= "";
// const sayHi =(name, age)=> {
//     console.log(`Hello there ${name}, my age is ${age}`);
// } 
//  sayHi ('susan',12)
//  sayHi ('john',11)
//  sayHi ('aina',10)

// const os = require("os")

// // info about the current user
//  const user = os.userInfo()
//  console.log(user)

//  // method returns the system uptime in a seconds
//  console.log(`the system uptime is ${os.uptime()} seconds`)

// const currentOs = {
//     name : os.type(),
//     release: os.release(),
//     totalMemo : os.totalmem(),
//     freeMemo : os.freemem()
// }
// console.log(currentOs)



// const path = require('path');
// console.log(path.sep);
// const filePath = path.join("/content", "subfolder", "text.txt")
// console.log(filePath)
// const base= path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname,"/content", "subfolder", "text.txt")
// console.log(absolute)


// const {readFileSync, writeFileSync} = require("fs")


// const first = readFileSync("./content/first.txt", "utf8")
// const second = readFileSync("./content/second.txt", "utf8")

// // console.log(first,second)

// writeFileSync("./content/result-sync.text", `this is the result of sync : ${first} , ${second}` 
// ,{flag: 'a'} )



// const {readFile, writeFile} =require("fs")

// readFile("./content/first.txt",'utf8',(err,result) =>{
// if(err){
//     console.log(err)
//     return
// }
// const first = result
// readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second =result
//     writeFile(
//         './content/result-async.txt',
//         `Here is the result : ${first}, ${second}`,
//         (err, result) => {
//           if (err) {
//             console.log(err)
//             return
//           }
//           console.log('done with this task')
//         }
// )
// })
// })
// console.log('starting next task')


const http = require('http');
const server =http.createServer((req,res) =>{
    if(req.url == "/"){
        res.end("welcome to the homepage")
    } else if (req.url == "/about"){
        res.end("what do you love about us")

    }else{
        res.end(
        
           ` <h1>Oops</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
            `
        )
    }
})

server.listen(5000)


//  const http = require('http');
//  const server =http.createServer((req,res) =>{
//     res.write("how are you doing today,i really like your outfit")
//   res.end()  
//  }
//  )
//  server.listen(5000)