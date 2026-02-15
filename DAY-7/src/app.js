// server create krna//

const express = require("express");

const notModel = require("./models/notes.model");

const app = express();

app.use(express.json()) // json data ko read krne ke liye middleware use krna padta hai

// POST /Notes

app.post("/notes",async (req,res)=>{
    const {title,description} = req.body

  const note = await notModel.create({
        title,
        description     })
  res.status(201).json({
    message:"note created successfully",
    note
  })
})

// GET /Notes//
app.get("/notes",async (req,res)=>{
    const notes = await notModel.find();
    res.status(200).json({  
        message:"notes fetched successfully",
        notes
    })
})




module.exports = app;