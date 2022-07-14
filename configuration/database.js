const mongoose = require('mongoose');


mongoose.connect(
    'mongodb+srv://kittriz05:Vamosbarca2022@cluster0.yaeh4.mongodb.net/lms?retryWrites=true&w=majority'
).then(()=>
console.log("connected to DB")
).catch((error)=>{
    console.log(error)
});