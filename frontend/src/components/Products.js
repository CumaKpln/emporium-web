import React from "react";
import { useCategory } from "./CategoryContext";
import { useProvince } from "./ProvinceContext";
import { useDispatch } from "react-redux";
import data from "../data/db.json";
import "../Styles/Product.css";
import { Link } from "react-router-dom";
import { selectProduct } from "../control/slices/productSlice";
import { useSearch } from './SearchContext';

function Products() {
  const { selectedCategory, selectedSubCategory } = useCategory();
  const { selectedProvince } = useProvince();
  const dispatch = useDispatch();
  const { nameFilter } = useSearch();

  const selectedProduct = (product) => {
    dispatch(selectProduct(product));
  };


  const filteredProducts = data["ilan-ver"].filter((product) => {
    const categoryMatch = selectedCategory ? product.category.toLowerCase() === selectedCategory.toLowerCase() : true;
    const subCategoryMatch = selectedSubCategory ? product.subCategory.toLowerCase() === selectedSubCategory.toLowerCase() : true;
    const nameMatch = nameFilter ? product.title.toLowerCase().includes(nameFilter.toLowerCase()) : true;
    return categoryMatch && subCategoryMatch && nameMatch;
  });

  return (
    <div className="products">
      {filteredProducts.map((product, id) => (
        <div className="img p-3" key={id} style={{ cursor: "pointer" }}>
          <Link to={`/urun-detayi/${id}`} onClick={() => selectedProduct(product)}>
            <img src={product.selectedFiles[0].url} alt="foto" />
            <p className="title" style={{ flex: "1" }}>
              {product.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
