const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 8080

const CardSchema = new mongoose.Schema({
    ImgUrl:String,
    name: String
  })

app.get('/', (req, res) => {
  res.send('Hello World! get')
})
app.post('/', (req, res) => {
  res.send('Hello World! post')
})
app.put('/', (req, res) => {
  res.send('Hello World! put')
})
app.delete('/', (req, res) => {
  res.send('Hello World! delete')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})