import React, { useState } from 'react';
import NewItem from './components/NewItem';
import ArticleItem from './components/ArticleItem';
import './App.css';

import axios from 'axios';

export default function App() {
  // just for study
  const [count, setCount] = useState(0);
  const add1 = () => {
    setCount(count + 1);
  };

  const [articles, setArticles] = useState([]);

  const getAllArticles = () => {
    axios
      .get(`http://localhost:5000/articles`)
      .then((response) => {
        console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data);
        setArticles(response.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  };

  const renderArticles=articles.map((articleObj,index) => {
    return <ArticleItem key={index} article={articleObj}/> 
  });

  return (
    <div className="app">
      <h3>APP 1+1 {1 + 1}</h3>
      {/* just for study this two lines */}
     
      <h1>Count is: {count} </h1>
      <button onClick={add1}>Add 1 to the counter</button>

      <button onClick={getAllArticles}>GET ARTICLES</button>

      <NewItem allArticles={getAllArticles}  title='Add Your Articles'   />

      {renderArticles}
    </div>
  );
}

/* 
state
lifecyle methods

*/
/* 
axios
    .get(`http://localhost:5000/articles`)
    .then((response) => {
      console.log('result: ', response);
    })
    .catch((err) => {
      console.log('ERR: ', err);
    });
*/
