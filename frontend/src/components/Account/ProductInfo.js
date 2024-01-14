import React, { useEffect, useState } from "react";
import "../../Styles/Account/ProductInfo.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../control/slices/productSlice";
import { Link } from "react-router-dom";

function ProductInfo() {
  const token = localStorage.getItem("token");
  const [userProducts, setUserProducts] = useState([]);
  const dispatch = useDispatch();

  // Ürün bilgilerini localStorage'e kaydeden fonksiyon
  const handleClick = (product) => {
    dispatch(selectProduct(product)); // Redux ile seçilen ürünü güncelle
    localStorage.setItem("selectedProduct", JSON.stringify(product)); // JSON formatında ürünü localStorage'e kaydet
  };

  // Kullanıcının ürünlerini API'den getiren fonksiyon
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mysql-emporium-deploy1.onrender.com/product/getUserProduct",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserProducts(response.data.mergedResult);
      const userProducts = response.data.mergedResult;
      console.log(userProducts);
    } catch (error) {
      console.error("Kullanıcı hatası:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `https://mysql-emporium-deploy1.onrender.com/product/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      fetchData();
    } catch (error) {
      console.error("Kullanıcı hatası:", error);
    }
  };
  

  return (
    <div className="row main-row">
      {userProducts.map((product) => (
        <div
          className="card col-xl-3 col-lg-4 col-md-6 col-12 "
          style={{ width: "18rem", minHeight: "15rem", border: "1px solid" }}
          key={product.id}
        >
          <img
            style={{ minHeight: "150px" }}
            src={`https://mysql-emporium-deploy1.onrender.com/photo/${product.img1}`}
            className="card-img-top"
            alt={product.productTitle}
          />
          <div className="card-body">
            <h5 className="card-title">{product.productTitle}</h5>
            <p className="card-text">{product.description}</p>
            <div
              className="row d-flex"
              style={{
                flexDirection: "row",
              }}
            >
              <div className="col-md-6">
                <Link
                  to={`/urun-detayi/${product.id}`}
                  onClick={() => handleClick(product)}
                  className="btn btn-primary"
                >
                  İlana Git
                </Link>
              </div>
              <div className="col-md-6">
                <button
                  className="bg-danger"
                  style={{
                    maxWidth: "auto",
                    border: "none",
                    display: "flex",
                    borderRadius: "5px",
                  }}
                  onClick={() => handleDelete(product.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                    style={{
                      color: "white",
                      border: "none",
                      marginTop: "2px",
                    }}
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  <p style={{ color: "white", marginTop: "2px" }}>Ürünü Sil</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductInfo;
