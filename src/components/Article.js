import React from "react";
import "../Styles/article.css";
import Ürünler from "../ürünler";

const Article = () => {
  return (
    <div className="article p-4" style={{ maxHeight: "70vh" }}>
      <div className="container-fluid">
        <h4 className="p-1">Beğenebilecekleriniz</h4>
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <Ürünler />
            <Ürünler />
            <Ürünler />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <Ürünler />
            <Ürünler />
            <Ürünler />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <Ürünler />
            <Ürünler />
            <Ürünler />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <Ürünler />
            <Ürünler />
            <Ürünler />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <Ürünler />
            <Ürünler />
            <Ürünler />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <Ürünler />
            <Ürünler />
            <Ürünler />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article

