import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Styles/fav.css";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favItem = useSelector((state) => state.products);

  console.log(favItem, "favItem");
  const favImage = favItem.selectedProduct.selectedFiles[0].url;
  console.log(favImage, "favimage");
  const id = favItem.id;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div key={id} className="card" style={{ width: "18rem" }}>
              <img src={favImage} className="card-img-top" alt="..."></img>
              <div className="card-body">
                {favItem.selectedProduct && (
                  <>
                    <h5 className="card-title">
                      {favItem.selectedProduct.title}
                    </h5>
                    <p className="card-text">
                      {favItem.selectedProduct.description}
                    </p>
                  </>
                )}
                <a href={`/urun-detayi/${id}`} className="btn btn-primary">
                  Ürüne git
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
