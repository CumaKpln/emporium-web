import React from "react";
import "../Styles/article.css";
import Products from './Products.js';

const Article = () => {
  return (
    <div className="article p-4" style={{ minHeight: "70vh" }}>
      <div className="container-fluid">
        <h4 className="pb-1">Beğenebilecekleriniz</h4>
        <Products />
      </div>
    </div>
  );
};

export default Article;
