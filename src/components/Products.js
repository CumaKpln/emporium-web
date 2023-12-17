import React from "react";
import { useDispatch } from "react-redux";
import data from "../data/db.json";
import "../Styles/Product.css";
import { Link } from "react-router-dom";
import { filters } from './FilterPage/FilterBar';
import { selectProduct } from "../control/slices/productSlice"; // Redux reducer'ınızdan gelen action

function Products() {
  const dispatch = useDispatch();

  const selectedProduct = (product) => { // Redux store'a seçilen ürünü gönderme
    dispatch(selectProduct(product));
  };

  
  return (
    <div className="products">
      {data["ilan-ver"].map((product, id) => (
          <div className="img p-3" key={id} style={{ cursor: "pointer" }}>
            <Link to={`/urun-detayi/${id}`} onClick={() => selectedProduct(product)}>
              <img src={product.selectedFiles[0].url} alt="foto" />
              <p className="title" style={{flex:"1"}}>{product.title}</p>
            </Link>
          </div>
        )
        )}
    </div>
  );

}
export default Products;

