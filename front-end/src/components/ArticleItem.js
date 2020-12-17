import axios from "axios";
import React, { useState } from "react";

export default function ArticleItem(props) {
  const { title, description, author, id } = props.article;
  const [newAuther, setNewAuther] = useState(""); //???? why

  const changeArticleAuthorById = () => {
    axios
      .put(`http://localhost:5000/articles/${id}`, {
        newAuthor: newAuther,
      })
      .then((response) => {
        console.log("RES: ", response);
        if (response.status === 200) props.getAllArticles();
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
        if (response.state === 200) {
          props.getAllArticles();
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
        onClick={() => {
          changeArticleAuthorById(id);
        }}
      >
        Update current author
      </button>

      <button
        onClick={() => {
          deleteArticleById(id);
        }}
      >
        Delete
      </button>
      <button onClick={deleteAticleBuId} >Delete</button>
    </div>
  );
}
