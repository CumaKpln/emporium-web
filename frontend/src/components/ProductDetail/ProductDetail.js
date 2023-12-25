import React from "react";
import Slider from "./ProductsDetail-pages/Slider";
import Owner from "./ProductsDetail-pages/Owner";
import Detail from "./ProductsDetail-pages/Detail";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../Styles/Product-Detail/ProductDetail.css";
import Description from "./ProductsDetail-pages/Description";

function ProductDetail() {
  return (
    <>
      <Navbar />
      <div
        className="container detail.cont"
        style={{
          minHeight: "100vh",
          marginBottom: "20px",
        }}
      >
        <div className="row detail-row">
          <div className=" col-md-6 ">
            <Slider />
          </div>

          <div className="col-md-6 section">
            <Detail />
            <Owner />
          </div>
        </div>
        <div className="desc">
          <Description />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
