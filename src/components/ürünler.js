import React, { useState } from "react";
import { useDispatch } from "react-redux";
import data from "../data/db.json";
import "../Styles/urunler.css";
import { Link } from "react-router-dom";
import { selectProduct } from "../control/slices/productSlice"; // Redux reducer'ınızdan gelen action


function Ürünler() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const filterByAll = (p) => {
    if (p.title.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
  }
  const selectedProduct = (product) => {
    console.log(product)
    dispatch(selectProduct(product)); // Redux store'a seçilen ürünü gönderme
  };
  return (
    <div className="products">
      <input type="text" onChange={(e) => { setSearch(e.target.value) }} />
      {data["ilan-ver"].filter((p) => filterByAll(p)).map((product, id) =>
      (
        <div className="img" key={id} style={{ cursor: "pointer" }}>
          <Link to="/urun-detay" onClick={() => { selectedProduct(product) }}

          >
            <img src={product.selectedFiles[0].url} alt="foto" />
            <p className="title">{product.title}</p>
          </Link>
        </div>
      )
      )}
    </div>
  );

}

export default Ürünler;

