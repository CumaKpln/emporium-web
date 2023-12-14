import React, { useState } from "react";
import { useDispatch } from "react-redux";
import data from "../data/db.json";
import "../Styles/Product.css";
import { Link } from "react-router-dom";
import { selectProduct } from "../control/slices/productSlice"; // Redux reducer'ınızdan gelen action
import { filters } from './FilterBar';

function Products() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const filterByAll = (p) => {
    if (!p.title.toLowerCase().includes(search.toLowerCase()))
      return false;
    if (p.price < filters.minP)
      return false;
    if (p.price > filters.maxP)
      return false;
    return true;
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
          <Link to="/product-detail" onClick={() => selectedProduct(product)}>
            <img src={product.selectedFiles[0].url} alt="foto" />
            <p className="title">{product.title}</p>
          </Link>
        </div>
      )
      )}
    </div>
  );

}
export default Products;

