const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/Employee")

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
})

app.get('/generate', async (req, res) => {
  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: 'Mohon',
      salary: 4500000,
      language: 'Pyrhon',
      city: 'New York',
      isManager: true
  
    })
    // console.log(e)
    
  }
  // res.json({ success: true, message: '10 10 Employees generated and saved to database successfully'});
  res.render('index', {foo: 'FOO'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})