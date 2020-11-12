const express = require("express");
const mainRouter = express.Router();
const {
  getAllArticles,
  createNewArticle,
  /*changeArticleAuthor,*/
  changeArticleTitleById,
} = require("../controllers/main-controller");

mainRouter.get("/articles", getAllArticles);
mainRouter.post("/articles", createNewArticle);
// mainRouter.put("./articles/:id/:author", changeArticleAuthor);
mainRouter.put("/articles/:id/:newTitle", changeArticleTitleById);

module.exports = mainRouter;
