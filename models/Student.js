const mongoose=require('mongoose');
const Schema=mongoose.Schema; //table respresent garxa ,yeha bata communicate garinxa 

const studentSchema=new Schema({
    studentName:{type:String,required:true},
    address:{type:String,required:true},
    department:{type:String,required:true},
    bookId:{type:String}
},{timestamps:true})

module.exports=mongoose.model('Student',studentSchema);