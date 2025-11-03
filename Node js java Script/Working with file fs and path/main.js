const { error } = require("console")
// const fs = require("fs/promises")
const fs = require("fs")

// console.log(fs)


console.log("starting")
// fs.writeFileSync("mohon.txt", "Mohon is a good boy")

fs.writeFile("mohon2.txt", "Mohon is a good boy2", ()=>{
    console.log("done")
    fs.readFile("mohon2.txt", (error, data) => {
        console.log(error, data.toString())
    })
})
fs.appendFile("mohon.txt", " mohonrobo", (e, d) => {
    console.log(d)
})
console.log("ending")