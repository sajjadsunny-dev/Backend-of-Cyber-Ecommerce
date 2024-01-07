const express = require('express')
const dbConnection = require('./config/dbConnection')
const app = express()
const userList = require('./models/userSchema')

require('dotenv').config()
dbConnection()
app.use(express.json())

app.post('/registration', (req, res) => {
   const {
      firstname,
      lastname,
      email,
      telephone,
      address1,
      city,
      postcode,
      division,
      district,
      password
   } = req.body

   const users = new userList({
      firstname,
      lastname,
      email,
      telephone,
      address1,
      city,
      postcode,
      division,
      district,
      password
   })
   users.save()

})

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.listen(3000)