const express = require("express")

const router = express.Router()

const bookController = require('../controller/bookController')

router.get('/getBooks',bookController.index)
router.post('/saveBook',bookController.save)
router.put('/saveBook/:id',bookController.update)
router.delete('/deleteBook/:id',bookController.delete)




module.exports = router