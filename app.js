const express = require('express')
const app = express()

const bookRoutes = require('./routes/bookRoutes')
 

app.use('/book',bookRoutes)


const port = 5000

app.listen(port,(error)=>{
  if (error){
    throw error
  }
  console.log(`server is listening the port ${port}`)
})







