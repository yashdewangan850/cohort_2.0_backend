const mongoose = require("mongoose");


function connectToDb(){
    return mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to DB");
    })
}

module.exports = connectToDb;