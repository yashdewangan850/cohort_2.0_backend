const express = require("express");
const cookiparser = require("cookie-parser");
const authRouter = require("./routers/auth.route")
const postRouter = require("./routers/post.route")

const app = express();

app.use(express.json());
app.use(cookiparser());

app.use("/api/auth",authRouter)
app.use("/api/posts",postRouter)

module.exports = app;
