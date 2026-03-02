const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
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

const folloModel = mongoose.model("follows", followSchema)
module.exports = folloModel