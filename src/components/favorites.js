import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Styles/fav.css";
import { useSelector } from "react-redux";
import { selectFav } from "../control/slices/favSlice";

const Favorites = () => {
  const favItem = useSelector((state) => state.products.selectedProduct);
  console.log(favItem, "favItem");
  const favImage = favItem.selectedFiles[0].url;
  const id = favItem.id;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {favItem}
            <div key={id} class="card" style={{ width: " 18rem" }}>
              <img src={favImage} class="card-img-top w-50" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{favItem.title}</h5>
                <p class="card-text">{favItem.description}</p>
                <a href={`/urun-detayi/${id}`} class="btn btn-primary">
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
