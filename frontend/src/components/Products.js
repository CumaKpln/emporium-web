import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../Styles/Product.css";
import { Link } from "react-router-dom";
import { selectProduct } from "../control/slices/productSlice";
import axios from "axios";

function Products() {
  const token = localStorage.getItem("token");
  const allProducts = localStorage.getItem("allProduct");


  const [allProduct, setAllProduct] = useState([]);


  //redux ile ürün detay sayfasına yönlendirme
  const dispatch = useDispatch();



  // Ürün bilgilerini Redux store'a gönder
  const selectedProduct = (product) => {
    dispatch(selectProduct(product));
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  // Ürün bilgilerini localStorage'a kaydet


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

  }, [token]);
  return (
    <>
      <div className="products row">
        {allProduct.map((product) => (
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
                <div class="card-body">
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