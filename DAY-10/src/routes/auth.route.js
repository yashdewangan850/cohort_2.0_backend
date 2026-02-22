const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token)

  res.status(201).json({
    message: "User registered successfully",
    user,
    token,
  });
});

authRouter.post("/products",(req,res)=>{
  console.log(req.cookies);
})

// POST/api/auth/login

authRouter.post("/login",async (req,res)=>{
  const {email,password}=req.body;

  const user = await userModel.findOne({email})


  if (!user) {
    return res.status(400).json({
      message: "User with this email does not exist",
    });
  }

  const isPasswordMatch = user.password === password;

  if (!isPasswordMatch) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("jwt_token", token )
  res.status(200).json({
    message: "User logged in successfully",
    user,
    
  });

})

module.exports = authRouter;
