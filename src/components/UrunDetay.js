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
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleSliderChange = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
     <Navbar />
     <div className="App">
      <div className="container">
        <div className="row">
          <div className="Baslik m-2">
            <h2>İlan Başlığı</h2>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-star-fill mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <span className="fs-6 ml-2">Favorilere ekle</span>
            </button>
          </div>
        </div>
        <div className="row slider-row">
          <div className="col-md-6">
            <Slider
              selectedImageIndex={selectedImageIndex}
              onSliderChange={handleSliderChange}
            />
            <Card onCardClick={handleCardClick} />
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

