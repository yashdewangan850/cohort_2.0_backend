const mongoose = require("mongoose");

const noteScheme = new mongoose.Schema({
  title: String,
  description: String,
});

const notModel = mongoose.model("notes", noteScheme);


module.exports = notModel;