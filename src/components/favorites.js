import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Styles/fav.css";

const Favorites = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>favoriler en son yapılacak</h1>

        {/* <div class="fav card bg-" style={{ width: "18rem" }}>
          <img src="" className="card-img-top mx-auto mt-1" alt="..." img />
          <div class="card-body">
            <h5 class="card-title">{}</h5>
            <p class="card-text">{}</p>
            <a href="#/" className="btn btn-primary">
              Favorilerden kaldır
            </a>
          </div>
        </div> */}
      </div>

      <Footer />
    </>
  );
};

export default Favorites;
