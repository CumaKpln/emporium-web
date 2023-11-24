import React from "react";
import data from "../data/db.json";
import "../Styles/urunler.css";

function Ürünler() {
  return (
    <div className="products">
      {data["ilan-ver"].map((product, id) => (
        <div className="img" key={id} style={{ cursor: "pointer" }}>
          <img src={product.selectedFiles[0].url} alt="foto" />
          <p className="title">{product.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Ürünler;
