const joi = require('joi')


const bookValidation = joi.object({
    bookName:joi.string(),
    author:joi.string(),
    department:joi.string(),
    available:joi.boolean(),
    issuedBy:joi.string()
})

module.exports = bookValidation;