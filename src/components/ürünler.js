import React from "react";
import "../Styles/urunler.css";
import data from "../data/db.json";



function Ürünler() {


  return (
    <div>
      {data["ilan-ver"].map((product, index) => (

        <div className="img" key={index} style={{ cursor: "pointer" }}>
          <img src={product.selectedFiles[0]} alt="foto" />
          <p className="fs-6">{product.description}</p>
        </div>

      ))}
    </div >
  );
}

export default Ürünler;
