// server ko create krna
// server ko config krna

const express = require("express");

const app = express();
app.use(express.json()); // middleware

const notes = [];

// POST /notes //

app.post("/notes", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    message: "Note created successfully",
  });
});

// GET /notes //

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
  });
});

module.exports = app;
