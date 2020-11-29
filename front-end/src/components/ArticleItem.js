import Axios from "axios";
import React from "react";

export default function ArticleItem(props) {
  const { title, description, author, id } = props.article;
  const [ newAuthor, setAuthor ] = useState('');

  const changeArticleAuthorById = () => {
    axios
      .put(`http://localhost:5000/articles/${id}`, {
        newAuthor: newAuthor,
      })
      .then((response) => {
        console.log("RES: ", response);
        if (response.status === 200) props.getAllArticles();
      })
      .catch((err) => {
				console.log('ERR: ', err);
			});
      
  };
  const deleteArticleById = () => {
		axios
			.delete(`http://localhost:5000/articles/${id}`)
			.then((response) => {
				if (response.state === 200) {
					props.getAllArticles();
				}
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	};



  return (
    <div className="article-item">
      <h3>TITLE: {title}</h3>
      <p>{description}</p>
      <p className="author">BY: {author}</p>

      <input type="text" placeholder="article new author ..." />
      <button>Update current author</button>

      <button>X</button>
    </div>
  );
}
