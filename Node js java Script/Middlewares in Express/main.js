const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog') 
const fs = require("fs")



app.use('/blog', blog)

// app.use(express.static('public'))
// Middleware 1 - Logger  for our applicatiojn
app.use((req, res, next) => {
    console.log(req.headers)
    req.mohon = "I am mohon";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middkware")
    console.log("m1")
    next()
})

// Middleware 1
app.use((req, res, next) => {
    req.mohon = "I am mohon";
    console.log("m2")
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello about!' + req.mohon)
})
app.get('/cantact', (req, res) => {
  res.send('Hello cantact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})