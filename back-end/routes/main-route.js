const express = require("express");
const mainRouter = express.Router();
const {
  getAllArticles,
  createNewArticle,
  changeArticleAuthorById,
  changeArticleTitleById,
  deleteArtecleById,
  deleteArtcleByAuthor,
  
} = require("../controllers/main-controller");

mainRouter.get("/articles", getAllArticles);
mainRouter.post("/articles", createNewArticle);
mainRouter.put("/articles/:id/:newTitle", changeArticleTitleById);
mainRouter.put("/articles/:id", changeArticleAuthorById);
mainRouter.delete("/articles/:id", deleteArtecleById);
mainRouter.delete("/articles", deleteArtcleByAuthor);


module.exports = mainRouter;
