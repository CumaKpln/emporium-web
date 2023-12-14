import React from "react";
import { useDispatch } from "react-redux";
import data from "../data/db.json";
import "../Styles/Product.css";
import { Link } from "react-router-dom";
import { selectProduct } from "../control/slices/productSlice";

function Products() {
  const dispatch = useDispatch();

  const selectedProduct = (product) => {
    dispatch(selectProduct(product)); // Redux store'a seçilen ürünü gönderme
  };

  return (
    <div className="products">
      {data["ilan-ver"].map((product, id) => (
        <div className="img" key={id} style={{ cursor: "pointer" }}>
          <Link to="/product-detail" onClick={() => selectedProduct(product)}>
            <img src={product.selectedFiles[0].url} alt="foto" />
            <p className="title">{product.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
