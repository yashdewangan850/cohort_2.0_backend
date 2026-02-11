const express = require("express");

const app = express();
app.use(express.json());

notes =[]
app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post("/notes",(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    console.log(notes);

    res.send("This is a post request");
})

module.exports = app;