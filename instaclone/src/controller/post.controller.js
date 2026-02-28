const postModel = require("../models/post.model");
const imafeKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new imafeKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({
      message: "token not provided, Unautorized access",
    });
  }
 
  let decoded = null
   try{
        decoded = jwt.verify(token, process.env.JWT_SECRET);
   }catch(err){
    return res.status(401).json({
        message:"invalid token, Unautorized"
    })
   }

  console.log(decoded);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder:"cohort-2-instaclone"
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id,
  });
  res.status(201).json({
    message: "post created succesfully.",
    post
  });


}

async function getPostController(req,res){
  const token = req.cookies.token

  if(!token){
      returnres.status(401).json({
        message:"UnAuthorized Access"
      })
    }

  let decoded = null;
  try{
     decoded = jwt.verify(token, process.env.JWT_SECRET)
  }
  catch(err){
    return res.status(401).json({
        message:"invalid token, Unautorized"
    })
   }

   const userId = decoded.id
    const posts = await postModel.find({
      user:userId

    })
    res.status(200).json({
        message:"posts fetched successfully",
        posts
    })
  }

  async function getPostDetailsController(req,ees){
    const token = req.cookis.token
    if(!token){
      returnres.status(401).json({
        message:"UnAuthorized Access"
      })
    }
    let decoded 
    try{

      decoded = jwt.verrify(token,process.env.JWT_SECRET)
      
    }catch(err){
      return res.status(401).json({
        message:"Invalid token"
      })
    }
    const userId = decoded.id
    const postId = req.parems.postId

    const post = await postModel.fimdById(postid)
  if(!post){
    return res.satus(404).json({
      message:"Post not Found "
    })
  }

  const isValidUser = post.user === userId
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
