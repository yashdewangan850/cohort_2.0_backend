const mongoose = require('mongoose');


const nodeSchema = new mongoose.Schema({
    title : String,
    description : String,
})
    
const notesModel = mongoose.model("fullstak", nodeSchema)

module.exports = notesModel