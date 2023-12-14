import React, { useState } from "react";
import "../Styles/ProductDetail.css";
import Slider from "./ProductDetail-Slider";
import Card from "./ProductDetail-Cards";
import Detail from "./ProductDetail-Detail";
import ProductOwner from "./ProductDetail-ProductOwner";
import Contents from "./ProductDetail-Description";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ProductDetail() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); 
  




  const handleSliderChange = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="container">
          {/* Diğer bileşenler */}
          <div className="row slider-row">
            <div className="col-md-6">
              <Slider
                selectedImageIndex={selectedImageIndex}
                onSliderChange={handleSliderChange}
              />
              <Card  />
            </div>
            <div className="col-md-6">
              <div className="row main-row">
                <div className="col-md-6">
                  <Detail />
                </div>
                <div className="col-md-6">
                  <ProductOwner />
                </div>
              </div>
            </div>
          </div>

          <div className="info">
            <Contents />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
