const Book = require('../models/Book')
const Student = require('../models/Student')
const studentValidation =require('../validations/studentValidation')


//saving the student information

exports.save= async(req,res)=>{
    const{studentName , address,department}= req.body
    const{error}=studentValidation.validate(req.body)

    if(error){
        res.status(400).json({
            'message':error.message,
            'status': false
        })
    }else{
        try {
           const student =new Student({
            studentName , address,department
           })

           const saveStudent= await student.save()
           if(saveStudent){
            res.status(201).json({
                'message' : 'Data Saved Sucessfully',
                'status':true
            })
           }

            
        } catch (error) {
            res.status(500).json({
                'message':'Internal Server Error',
                'status':false
            })
            
        }
    }







}


//for viewing the student information

exports.index = async(req,res)=>{


    try {
        const student = await Student.find()
        if(student){
            res.status(200).json({
                'message':"Data found Sucessfully",
                'object' : student
            })
        }
    } catch (error) {
        res.status(500).json({
            'message':'Internal Server Error',
            'status':false
        })
    }
}


// for updating the student information

exports.update = async(req,res) =>{

    const{studentName , address,department}= req.body
    const{error}=studentValidation.validate(req.body)

    if(error){
        res.status(400).json({
            'message':error.message,
            'status': false
        })
    }else{
        try {
           const data ={
            studentName , address,department
           }

           const update= await Student.findByIdAndUpdate({ _id:req.params.id},data)
           if(update){
            res.status(201).json({
                'message' : 'Data Updated Sucessfully',
                'status':true
            })
           }else{
            res.status(200).json({
                "message":"Data not Found",
                "status" :false
            })
           }

            
        } catch (error) {
            res.status(500).json({
                'message':'Internal Server Error',
                'status':false
            })
            
        }
    }
    
}




//for deleting the student information

exports.delete = async (req, res) => {

    try {

        const id = req.params.id
        const del = await Student.findByIdAndDelete(id);

        if (del) {
            res.status(200).json({
                "message": "Data deleted successfully",
                "status": true
            })
        } else {
            res.status(200).json({
                "message": "Data not found",
                "status": false
            })
        }
    }catch (error) {
        res.status(500).json({
            'message':'Internal Server Error',
            'status':false
        })
        
    }
}

