const express = require("express");
const userRouter = express.Router();
const { login, signup } = require("../controllers/userController");
userRouter.post("/users/signup", signup);
userRouter.post("/users/login", login);


module.exports = userRouter;
