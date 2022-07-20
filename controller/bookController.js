const Book = require('../models/Book')
const Student = require('../models/Student')
const bookValidation = require('../validations/bookValidation')

//for viewing the book information
exports.index = async(req,res)=>{

    try {
        const books = await Book.find()
        if(books){
            res.status(200).json({
                'message':"Data found Sucessfully",
                'object' : books

            })
        }
        
    } catch (error) {
        res.status(500).json({
            'message':'Internal Server Error',
            'status':false
        })
        
    }
}
//for saving the book information
exports.save=async(req,res)=>{

    const{bookName,author,department,available}= req.body //destructuring the fields

    const {error}=bookValidation.validate(req.body)  // validating the json 

   if(error){
    res.status(400).json({
        'message':error.message,
        'status':false
    })
   }else{
    try {
        const book = new Book({
            bookName,author,department,available
    
        })
         const saveBook = await book.save()
         if(saveBook){
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

//for updating the book information
exports.update = async (req, res) => {

    //destructuring incoming request body
    const{bookName,author,department,available,issuedBy}= req.body
    //validating incoming request body
    const { error } = bookValidation.validate({bookName,author,department,available,issuedBy})
    if (error) {
        res.status(400).json({
            "message": error.message,
        })
    } else {

        try {

            const data = {bookName,author,department,available,issuedBy}
              let update= null;   
            if(issuedBy && issuedBy !== "" ){
                console.log("insideIf");
               console.log(req.params.id);
                 update = await Book.findByIdAndUpdate({ _id: req.params.id }, {available,issuedBy})
                const studentUpdate = await Student.findByIdAndUpdate({ _id: issuedBy},{issuedBook:req.params.id} )
            }else{
                console.log("helo");
                 update = await Book.findByIdAndUpdate({ _id: req.params.id }, data)

            }


           
            if (update) {
                res.status(201).json({
                    "message": "Book updated successfully!!!",
                    "status": true
                })
            }
            else {
                res.status(200).json({
                    "message": "Data not found",
                    "status": false
                })
            }

        } catch (error) {
                  console.log(error);
            res.status(500).json({
                "message": "Internal Server Error",
                "status": false
            })

        }
    }
}

//for deleting the book information 
exports.delete = async (req, res) => {

    try {

        const id = req.params.id
        const del = await Book.findByIdAndDelete(id);

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
        console.log(error);
        res.status(500).json({
            'message':'Internal Server Error',
            'status':false
        })
        
    }
}
