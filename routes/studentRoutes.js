const express = require('express')

const router = express.Router()

const studentController = require('../controller/studentController')

router.get('/getStudentList',studentController.index)
router.post('/saveStudent',studentController.save)
router.put('/saveStudent/:id',studentController.update)
router.delete('/deleteStudent/:id',studentController.delete)



module.exports = router