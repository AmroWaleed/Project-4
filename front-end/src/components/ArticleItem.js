import React, { useState } from "react";
import axios from "axios";

export default function ArticleItem(props) {
  const { title, description, author, id } = props.article;
  const [newAuthor, setAuthor] = useState(''); //???? why

  const changeArticleAuthorById = () => {
    axios
      .put(`http://localhost:5000/articles/${id}`, {
        newAuthor: newAuthor,
      })
      .then((response) => {
        console.log("RES: ", response);
        if (response.status === 200) {
          props.getArticles();
        }
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  const deleteArticleById = () => {
    // use filter to delete from frontend , search about that on google
    axios
      .delete(`http://localhost:5000/articles/${id}`)
      .then((response) => {
        if (response.status === 200) {
          props.getArticles();
        }
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  return (
    <div className="article-item">
      <h3>TITLE: {title}</h3>
      <p>{description}</p>
      <p className="author">BY: {author}</p>

      <input type="text" placeholder="article new author ..." />
      <button
        onClick={() => {changeArticleAuthorById(id);
        }}
      >
        Update Current Author
      </button>
      {/* 
      <button onClick={() => {deleteArticleById(id);}}>
        Delete
      </button> */}
      <button onClick={()=>{deleteArticleById(id)}}>Delete</button>
    </div>
  );
}
