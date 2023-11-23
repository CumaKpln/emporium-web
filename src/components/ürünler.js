import React from "react";
import "../Styles/urunler.css";
import data from "../data/db.json";

function Ürünler() {
  return (
    <div className="products">
      {data["ilan-ver"].map((product, index) => (
        <div className="img" key={index} style={{ cursor: "pointer" }}>
          <img src={product.selectedFiles[0].url} alt="foto" />
          <p className="fs-6">{product.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Ürünler;
