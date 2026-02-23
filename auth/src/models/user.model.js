const mongoose = require('mongoose');   

const userSchema = new mongoose.Schema({
    name : String,
    email:{
        type : String,
        unique : true
    },
    password : String
})              

const userModels = mongoose.model('User', userSchema);

module.exports = userModels;  