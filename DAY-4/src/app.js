const express = require("express");

const app = express();
app.use(express.json());

notes = [];
app.get("/", (req, res) => {
  res.send("Hello World");
});

// POST notes API

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  console.log(notes);

  res.send("This is a post request");
});

// GET notes AOI

app.get("/notes", (req, res) => {
  res.send(notes);
});

// DELETE notes API

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.send("notes deleted successfully");
});

// PATCH notes API

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;
  res.send("notes updated successfully");
});

module.exports = app;
