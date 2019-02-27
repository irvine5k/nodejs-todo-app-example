const mongoose = require('mongoose')

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 10,
        trim: true

    },
    
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
        
    }

})

module.exports = { User }