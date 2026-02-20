const express = require("express");
const notesModel = require("./model/node.model");
const cors = require("cors")
const path = require("path")

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")))
//  -POST /appi/notes - Create a new note
//  -create new notes and store data in mongodb
//  -req.body - {title, description}

app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;

  const notes = await notesModel.create({
     title, description 
    });
  res.status(201).json({
    message: "Note created successfully",
    notes
  });
});


// GET /api/notes - Get all notes
// -fetch all notes from mongodb and return to client

app.get("/api/notes",async (req,res)=>{
   const notes = await notesModel.find()
   res.status(200).json({
    message : "Notes fetched successfully",
    notes
   })
})


// DELETE /api/notes/:id - Delete a note by ID
// -delete a note from mongodb based on the provided ID

app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id;
    await notesModel.findByIdAndDelete(id)

    res.status(200).json({
        message : "Note deleted successfully",
    })

})


// PATCH /api/notes/:id - Update a note by ID
// -update the description of a note
// -req.body - {description}

app.patch("/api/notes/:id", async (req, res) => {
    const id = req.params.id;
    const { description } = req.body;

    const notes = await notesModel.findByIdAndUpdate(id, { description })

    res.status(200).json({
        message : "Note updated successfully",
        notes
    })
})


app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})



module.exports = app;
