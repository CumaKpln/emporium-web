import React, { useState } from "react";
import "./App.css";
import Slider from "./slider";
import Card from "./Card";
import Detay from "./detay";
import Sahip from "./urunSahibi";
import Icerik from "./icerik";

function App() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleSliderChange = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-2">
            <div className="Baslik m-2">
              <h2>İlan Başlığı</h2>
            </div>
          </div>
        </div>
        <div className="row ">
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
  );
}

export default App;
