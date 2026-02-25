const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },
  imgUrl: {
    type: String,
    require: [true, "imgUrl is require for creating an post"],
  },
  user: {
    ref: "users",
    type: mongoose.Schema.Types.ObjectId,
    require: [true, "user id is required for creating an post"],
  },
});
const postModel = mongoose.model("posts", postSchema);

module.express = postModel;
