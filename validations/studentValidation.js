const joi = require('joi')

const studentValidation = joi.object({
    studentName:joi.string().required(),
    address:joi.string().required(),
    department:joi.string().required(),
})

module.exports = studentValidation;