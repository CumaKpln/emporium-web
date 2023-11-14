import React from "react";
import "../Styles/article.css";
import Ürünler from "../ürünler";

const Article = () => {
  return (
    <div className="article p-4"  style={{ maxHeight: "55vh" }}>
      <div className="container-fluid">
        <h4 className="p-1">Beğenebilecekleriniz</h4>
        <div className="row">
          <div className="col-sm-2">
            {" "}
            <Ürünler /> <Ürünler /> <Ürünler />
          </div>
          <div className="col-sm-2">
            {" "}
            <Ürünler /> <Ürünler /> <Ürünler />
          </div>
          <div className="col-sm-2">
            {" "}
            <Ürünler /> <Ürünler /> <Ürünler />
          </div>
          <div className="col-sm-2">
            {" "}
            <Ürünler /> <Ürünler /> <Ürünler />
          </div>
          <div className="col-sm-2">
            {" "}
            <Ürünler /> <Ürünler /> <Ürünler />
          </div>
          <div className="col-sm-2">
            {" "}
            <Ürünler /> <Ürünler /> <Ürünler />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
