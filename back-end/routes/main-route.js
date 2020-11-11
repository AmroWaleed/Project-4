const express = require('express');
const mainRouter = express.Router();
const {gitAllPosts,createNewPost} = require
      ('../controllers/main-controller');
      

      mainRouter.get('/posts', gitAllPosts);
      mainRouter.post('/posts',createNewPost);



module.exports = mainRouter;