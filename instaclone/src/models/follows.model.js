const mongoose = require("mongoose")

const folowSchema = new mongoose.Schema({
     follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true, "Follower is required"]
    },
    followee:{
        type:mondoos.Schema.Types.ObjectId,
        ref:"users",
        required:[true, "Follower is required"]

    },
},{
    timestamps: true
})


module.exports = folowSchema