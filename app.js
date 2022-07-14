const express = require('express')
const app = express()
const bodyParser= require('body-parser')
require('./configuration/database')
const bookRoutes = require('./routes/bookRoutes')
const studentRoutes = require('./routes/studentRoutes')

app.use(bodyParser.urlencoded({extended:true})) //body parser use garerw method ma request aaxa so yo need xa
app.use(express.json())

//using  book routes
app.use('/book',bookRoutes)

//using students routes
app.use('/student',studentRoutes)

//port
const port = 5000
//server
app.listen(port,(error)=>{
  if (error){
    throw error
  }
  console.log(`server is listening the port ${port}`)
})







