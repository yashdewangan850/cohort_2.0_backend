const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [ true, "User name already exists" ],
        // required: [ true, "User name is required" ]
    },
    email: {
        type: String,
        unique: [ true, "Email already exists" ],
        // required: [ true, "Email is required" ]
    },
    password: {
        type: String,
        // required: [ true, "Password is required" ]

    },
    bio: String,
    profileImage: {
        type: String,
        default: "default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
    },
})


const userModel = mongoose.model("users", userSchema)

module.exports = userModel