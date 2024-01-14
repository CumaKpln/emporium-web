import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../Styles/Account/ProductInfo.css";
import { useDispatch } from "react-redux";
import { selectProduct } from "../control/slices/productSlice";

function Favorite() {
  const token = localStorage.getItem("token");
  const [favProducts, setFavProducts] = useState([]);
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(selectProduct(product)); // Redux ile seçilen ürünü güncelle
    localStorage.setItem("selectedProduct", JSON.stringify(product)); // JSON formatında ürünü localStorage'e kaydet
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mysql-emporium-deploy1.onrender.com/user/userinfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      )
        .then((response) => {

          setFavProducts(response.data.userinfo.favorites);
        });
    } catch (error) {
      console.error("Kullanıcı hatası:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [token]);
  console.log(favProducts)
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row mt-5 mb-5 gap-5  justify-content-center">
          {favProducts.map((product) => (
            <div key={product.id} className="card d-flex img col-xl-3 col-lg-4 col-md-6 col-12"
              style={{
                width: "18rem",
                minHeight: "15rem",
                border: "1px solid",
              }}
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
                      to={`/urun-detayi/${product.productId}`}
                      onClick={() => handleClick(product)}
                      className="btn btn-primary"
                    >
                      İlana Git
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Favorite;
