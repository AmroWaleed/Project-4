const articles = [
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
  console.log("getAllArticles");
  res.json(articles);
};
const createNewArticle = (req, res) => {
  console.log("creat new article");
  console.log("REQ.Body: ", req.body);
  req.body.id = ++last_id;
  articles.push(req.body);
  res.json(articles);
};

// const changeArticleAuthor = (req, res) => {
//   console.log("change article author");
//   console.log("REQ.body ",req.body);
//   req.body.author = req.body;

//   res.json(articles);
// };
const changeArticleTitleById = (req, res) => {
  console.log("REQ.PARAMS: ", req.params);
  console.log("ID: ", req.params.id); // string
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id == req.params.id) {
      articles[i].title = req.params.newTitle;
    }
  }
  res.json(articles);
};

module.exports = {
  getAllArticles,
  createNewArticle,
  changeAticleTitleById /*changeArticleAuthor*/,
};
