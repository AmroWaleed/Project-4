const connection = require("../db");

let articles = [
  {
    id: 1,
    title: "eat fried chicken",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "jouza",
  },
  {
    id: 4,
    title: "how to studey react",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    author: "abd",
  },
  {
    id: 7,
    title: "how to vote",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    author: "jouza",
  },
];

let last_id = 7;

const getAllArticles = (req, res) => {
  console.log("GETALLARTICLES: ");
  const queryCommand = `SELECT * FROM articles`;
  connection.query(queryCommand, (err, result, fields) => {
    if (err) throw err;
    // result are the data returned by mysql server
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const createNewArticle = (req, res) => {
  console.log("CREATENEWARTICLE: ");
  const { title, author, description } = req.body;
  const queryCommand = `INSERT INTO articles(title, description, author)
  VALUES("${req.body.title}","${req.body.description}","${req.body.author}")`;
  connection.query(queryCommand, (err, result, fields) => {
    if (err) throw err;
    // result are the data returned by mysql server
    console.log("RESULT: ", result);
    res.json("adding new article is complete");
  });
};

const getAllArticles_express = (req, res) => {
  console.log("getAllArticles");
  res.json(articles);
};
const createNewArticle_express = (req, res) => {
  console.log("creat new article");
  console.log("REQ.Body: ", req.body);
  req.body.id = ++last_id;
  articles.push(req.body);
  res.json(articles);
};

const changeArticleTitleById = (req, res) => {
  console.log("REQ.PARAMS: ", req.params);
  console.log("ID: ", req.params.id);
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id == req.params.id) {
      articles[i].title = req.params.newTitle;
    }
  }
  res.json(articles);
};

const changeArticleAuthorById = (req, res) => {
  console.log("REQ.params: ", req.params);
  console.log("ID: ", req.params.id);
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id == req.params.id) {
      articles[i].author = req.body.newAuthor;
    }
  }

  res.json(articles);
};

const deleteArtecleById = (req, res) => {
  console.log("REQ.params: ", req.params);
  console.log("ID: ", req.params.id);
  articles = articles.filter((article) => article.id != req.params.id);
  res.json(articles);
};

const deleteArtcleByAuthor = (req, res) => {
  console.log("REQ.body: ", req.body);
  console.log("AUTHOR: ", req.body.author);
  articles = articles.filter((article) => article.author != req.body.author);
  res.json(articles);
};
module.exports = {
  getAllArticles,
  createNewArticle,
  changeArticleTitleById,
  changeArticleAuthorById,
  deleteArtecleById,
  deleteArtcleByAuthor,
};
