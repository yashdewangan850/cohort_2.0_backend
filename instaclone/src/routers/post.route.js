const express = require("express")
const postRouter = express.Router()
const postController = require("../controller/post.controller")
const multer = require("multer")
const identifyUser = require("../middlewares/auth.middleware")
const upload = multer({storage: multer.memoryStorage()})


// POST /api/posts [protected]
//  req.body = {caption,image-file}

postRouter.post("/",upload.single("image"),identifyUser,postController.createPostController)


// GET /api/user 
// 

postRouter.get("/",identifyUser,postController.getPostController)

// GET /api/posts/details/:postid
// -- return an detail abot specific post with the id .also check wather the post belong to the user that requsted come from or not . if not return 401 unautorized access

postRouter.get("/details/:postId",identifyUser,postController.getPostDetailsController)


module.exports = postRouter
