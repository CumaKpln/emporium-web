import React, { useState } from "react";
import "../Styles/UrunDetay.css";
import Slider from "./UrunDetay-Slider";
import Card from "./UrunDetay-Cards";
import Detay from "./UrunDetay-Detay";
import Sahip from "./UrunDetay-Sahip";
import Icerik from "./UrunDetay-Açıklama";

function UrunDetay() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleCardClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleSliderChange = (index) => {
    setSelectedImageIndex(index);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-2">
            <div className="Baslik m-2">
              <h2>İlan Başlığı</h2>
              <button onClick={handleButtonClick}>
                <i className={`bi bi-star${isButtonClicked ? '-fill' : ''}`}></i>
              </button>
            </div>
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
              <div className="col-md-6  ">
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
  );
}

export default UrunDetay;
