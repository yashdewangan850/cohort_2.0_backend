const express = require("express");
const authRouter = express.Router();
const uregister = require("../models/user.model");
const userModels = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");


// POST /api/auth/register

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExist = await uregister.findOne({ email });

  if (isUserExist) {
    return res.status(409).json({ message: "User already exists" });
  }

  const user = await userModels.create({
    name,
    email,
    password: crypto.createHash("sha256").update(password).digest("hex"),
  });

const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
  expiresIn: "1h",


});

res.cookie("token", token)

    res.status(201).json({ message: "User registered successfully", token });
})

// POSTt /api/auth/login


authRouter.post("/login", async(req, res) => {
  const { email, password } = req.body;

  const user = await userModels.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

  const isPasswordValid = hashedPassword === user.password;

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  } 
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
    res.cookie("token", token)

    res.status(200).json({ message: "Login successful", token });


});

module.exports = authRouter;
