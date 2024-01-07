const express = require('express') //모듈 가져오기
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://<password>@clustertest.u6po4pe.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})