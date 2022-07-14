const joi = require('joi')


const bookValidation = joi.object({
    bookName:joi.string().required(),
    author:joi.string().required(),
    department:joi.string().required(),
    available:joi.boolean().required(),
})

module.exports = bookValidation;