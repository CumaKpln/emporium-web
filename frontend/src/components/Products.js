// Products.js
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../Styles/Product.css";
import { Link } from "react-router-dom";
import { selectProduct } from "../control/slices/productSlice";
import axios from "axios";
import { useCategory } from "./Context/CategoryContext";

function Products() {
  const token = localStorage.getItem("token");
  const [allProduct, setAllProduct] = useState([]);
  const { selectedCategory, selectedSubCategory } = useCategory();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  //redux ile ürün detay sayfasına yönlendirme
  const selectedProduct = (product) => {
    dispatch(selectProduct(product));
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mysql-emporium-deploy1.onrender.com/product/getAllProduct",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAllProduct(response.data.allProducts);
    } catch (error) {
      console.error("Kullanıcı hatası:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    // Kategori ve alt kategoriye göre filtreleme işlemleri burada yapılır
    const filtered = allProduct.filter((product) => {
      // Filtreleme kriterlerine göre ayarlamaları yapın
      return (
        (!selectedCategory || product.category === selectedCategory) &&
        (!selectedSubCategory || product.subCategory === selectedSubCategory) &&
        (product.productTitle.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    // Filtrelenmiş ürünleri state'e set et
    setFilteredProducts(filtered);
  }, [allProduct, selectedCategory, selectedSubCategory, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="products row">
        {/* Arama kutusu eklenmiş */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Ürün Ara"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {filteredProducts.map((product) => (
          <div className="img col-xl-3 col-lg-4 col-md-6 col-12 " key={product.id} style={{ cursor: "pointer" }}>
            <Link
              to={`/urun-detayi/${product.id}`}
              onClick={() => selectedProduct(product)}
            >
              <div className="card" style={{ border: "1px solid lightgray", padding: "15px", height: "250px" }}>
                <img
                  src={`https://mysql-emporium-deploy1.onrender.com/photo/${product.img1}`}
                  className="card-img-top "
                  alt={product.productTitle}
                  style={{ minHeight: "75px" }}
                />
                <div className="card-body">
                  <h6 className="card-title mt-5">{product.productTitle}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
