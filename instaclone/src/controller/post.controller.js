const postModel = require("../models/post.model");
const imafeKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const identifyUser = require("../middlewares/auth.middleware")

const imagekit = new imafeKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder:"cohort-2-instaclone"
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id
  });
  res.status(201).json({
    message: "post created succesfully.",
    post
  });


}

async function getPostController(req,res){
 
   const userId = req.user.id
    const posts = await postModel.find({
      user:userId

    })
    res.status(200).json({
        message:"posts fetched successfully",
        posts
    })
  }

async function getPostDetailsController(req,res){
    const userId = req.user.id
    const postId = req.parems.postId

    const post = await postModel.fimdById(postid)
  if(!post){
    return res.satus(404).json({
      message:"Post not Found "
    })
  }

  const isValidUser = post.user.toString() === userId
  if(!isValidUser){
    return res.status(403).json({
      message:"Forbidden Content"
    })
  }


  return res.status(200).json({
    message:"post fetched successfully",
    post
  })





  }

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController 
};
