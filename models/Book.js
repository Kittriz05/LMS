const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const bookSchema=new Schema({
    bookName:{type:String},
    author:{type:String},
    department:{type:String},
    available:{type:Boolean,default:true},
    issuedBy:{type:String}
},{timestamps:true})

module.exports=mongoose.model('Book',bookSchema);