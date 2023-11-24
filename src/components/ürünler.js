import React from "react";
import { Link } from "react-router-dom";
import data from "../data/db.json";
import "../Styles/urunler.css";

function Ürünler() {
  return (
    <div className="products">
      {data["ilan-ver"].map((product, id) => (
        <div className="img" style={{ cursor: "pointer" }}>
          <Link to={`/UrunDetay`} key={id}>
            <img src={product.selectedFiles[0].url} alt="foto" />
            <p className="title">{product.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Ürünler;
