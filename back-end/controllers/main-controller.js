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

//////////////////////////////////////// MySQL/////////////////////////////////////

const getAllArticles = (req, res) => {
  console.log("GETALLARTICLES: ");
  const queryCommand = `SELECT * FROM articles`;
  connection.query(queryCommand, (err, result) => {
    if (err) throw err;
    // result are the data returned by mysql server
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const getAllArticlesByAuther = (req, res) => {
  console.log("GET ALL ARTICLES BY AUTHER: ");
  const queryCommand = `SELECT * FROM articles WHERE author="${req.body.author}"`;
  connection.query(queryCommand, (err, result) => {
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
  connection.query(queryCommand, (err, result) => {
    if (err) throw err;
    // result are the data returned by mysql server
    console.log("RESULT: ", result);
    res.json("adding new article is complete");
  });
};

const changeArticleTitleById = (req, res) => {
  console.log("CHANGE ARTICLE BY ID: ");
  const { title } = req.params;
  const queryCommand = `UPDATE articles SET title="${req.params.newTitle}" 
  WHERE id="${req.params.id}"`;
  connection.query(queryCommand, (err, result, fields) => {
    if (err) throw err;
    // result are the data returned by mysql server
    console.log("RESULT: ", result);
    res.json("changing the article title by id is complete");
  });
};

const changeArticleAuthorById = (req, res) => {
  console.log("CHANGE ARTICLE AUTHOR BY ID: ");
  const { author } = req.params;
  const queryCommand = `UPDATE articles SET author="${req.body.newAuthor}" 
  WHERE id="${req.params.id}"`;
  connection.query(queryCommand, (err, result, fields) => {
    if (err) throw err;
    // result are the data returned by mysql server
    console.log("RESULT: ", result);
    res.json("changing the article author by id is complete");
  });
};

const changeArticleDescriptionById = (req, res) => {
  console.log("change Article Description By Id: ");
  const { description } = req.params;
  const queryCommand = `UPDATE articles SET description="${req.body.newDescription}" 
  WHERE id="${req.params.id}"`;
  connection.query(queryCommand, (err, result, fields) => {
    if (err) throw err;
    // result are the data returned by mysql server
    console.log("RESULT: ", result);
    res.json("changing the article description by id is complete");
  });
};

const deleteArtecleById = (req, res) => {
  console.log("DELETE ARTICLE BY ID: ");
  const { articles } = req.params;
  const queryCommand = `DELETE FROM articles WHERE id="${req.params.id}"`;
  connection.query(queryCommand, (err, result, fields) => {
    if (err) throw err;
    // result are the data returned by mysql server
    console.log("RESULT: ", result);
    res.json("delete an article by ID is complete");
  });
};

const deleteArtcleByAuthor = (req, res) => {
  console.log("DELETE ARTICLE BY AUTHOR: ");
  const { articles } = req.params;
  const queryCommand = `DELETE FROM articles WHERE author="${req.body.author}"`;
  connection.query(queryCommand, (err, result, fields) => {
    if (err) throw err;
    // result are the data returned by mysql server
    console.log("RESULT: ", result);
    res.json("delete an article by author is complete");
  });
};
///////////////////////////////////// Express////////////////////////////////////

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

const changeArticleTitleById_express = (req, res) => {
  console.log("REQ.PARAMS: ", req.params);
  console.log("ID: ", req.params.id);
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id == req.params.id) {
      articles[i].title = req.params.newTitle;
    }
  }
  res.json(articles);
};

const changeArticleAuthorById_express = (req, res) => {
  console.log("REQ.params: ", req.params);
  console.log("ID: ", req.params.id);
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id == req.params.id) {
      articles[i].author = req.body.newAuthor;
    }
  }

  res.json(articles);
};

const deleteArtecleById_express = (req, res) => {
  console.log("REQ.params: ", req.params);
  console.log("ID: ", req.params.id);
  articles = articles.filter((article) => article.id != req.params.id);
  res.json(articles);
};

const deleteArtcleByAuthor_express = (req, res) => {
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
  getAllArticlesByAuther,
  changeArticleDescriptionById,
};
