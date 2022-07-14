const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const bookSchema=new Schema({
    bookName:{type:String,required:true},
    author:{type:String,required:true},
    department:{type:String,required:true},
    available:{type:Boolean,default:true},
    studentId:{type:String}
},{timestamps:true})

module.exports=mongoose.model('Book',bookSchema);