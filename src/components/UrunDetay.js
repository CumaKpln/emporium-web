import React, { useState } from "react";
import "../Styles/UrunDetay.css";
import Slider from "./UrunDetay-Slider";
import Card from "./UrunDetay-Cards";
import Detay from "./UrunDetay-Detay";
import Sahip from "./UrunDetay-Sahip";
import Icerik from "./UrunDetay-Açıklama";
import Navbar from "./Navbar";
import Footer from "./Footer";

function UrunDetay() {
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
                  <Detay />
                </div>
                <div className="col-md-6">
                  <Sahip />
                </div>
              </div>
            </div>
          </div>

          <div className="info">
            <Icerik />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UrunDetay;
