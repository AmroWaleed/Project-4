import axios from 'axios';
import React, { useState } from 'react';


export default function NewItem(props) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [author, setAuthor] = useState('');

  const addNewArticle = () => {
    axios
      .post(`http://localhost:5000/articles`, {
        "title": title,
        "description":desc,
        "author": author,
      })
      .then((response) => {
        console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data);
        if (response.status === 200) {
          props.allArticles();
        }
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };

  return (
    <div className="new-item">
      <h1>{props.title}</h1>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="article title ..."
      />
      <br />
      <textarea
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        rows="4"
        cols="50"
        placeholder="article description ..."
      ></textarea>
      <br />
      <input
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        type="text"
        placeholder="article author ..."
      />
      <br />
      <button onClick={addNewArticle}>Add New Article</button>
    </div>
  );
}
