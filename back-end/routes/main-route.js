const express = require("express");
const mainRouter = express.Router();
const {
  getAllArticles,
  createNewArticle,
  changeArticleAuthorById,
  changeArticleTitleById,
  deleteArtecleById,
  deleteArtcleByAuthor,
  getAllArticlesByAuther,
  changeArticleDescriptionById,
  recoverDeletedArticleByID,
} = require("../controllers/main-controller");

mainRouter.get("/articles", getAllArticles);
mainRouter.get("/articles", getAllArticlesByAuther);
mainRouter.get("/articles/:id", recoverDeletedArticleByID);
mainRouter.post("/articles", createNewArticle);
mainRouter.put("/articles/:id/:newTitle", changeArticleTitleById);
mainRouter.put("/articles/:id", changeArticleAuthorById);
mainRouter.put("/articles/:id", changeArticleDescriptionById);
mainRouter.delete("/articles/:id", deleteArtecleById);
mainRouter.delete("/articles", deleteArtcleByAuthor);

module.exports = mainRouter;
