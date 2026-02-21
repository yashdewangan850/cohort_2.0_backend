const express = require("express");
const userModel = require("../models/user.model");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const isUserAlreadyPresent = await userModel.findOne({ email });

  if (isUserAlreadyPresent) {
    return res.status(400).json({
      message: "User with this email already exists",
    });
  }
  const user = await userModel.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    message: "User registered successfully",
    user,
  });
});

module.exports = authRouter;
