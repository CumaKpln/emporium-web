import React, { useState } from "react";
import "../Styles/UrunDetay.css";
import Slider from "./UrunDetay-Slider";
import Card from "./UrunDetay-Cards";
import Detay from "./UrunDetay-Detay";
import Sahip from "./UrunDetay-Sahip";
import Icerik from "./UrunDetay-Açıklama";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";

function UrunDetay() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Başlangıç değeri olarak 0 atanmıştır
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct) // Redux store'dan gelen veri, varsayılan olarak boş bir nesne

  const handleCardClick = (productId) => {
    // Örnek olarak, seçilen ürünü Redux store'a dispatch etmek gibi
    dispatch({ type: "SELECT_PRODUCT", payload: productId }); // Örnek bir action dispatch etme
  };

  const handleSliderChange = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
<div>{selectedProduct}</div>

      <Navbar />
      <div className="App">
        <div className="container">
          {/* Diğer bileşenler */}
          <div className="row slider-row">
            <div className="col-md-6">
              <Slider
                selectedProduct={selectedProduct}
                selectedImageIndex={selectedImageIndex}
                onSliderChange={handleSliderChange}
              />
              <Card
                onCardClick={handleCardClick}
                selectedProduct={selectedProduct}
              />
            </div>
            <div className="col-md-6">
              <div className="row main-row">
                <div className="col-md-6">
                  <Detay selectedProduct={selectedProduct} />
                </div>
                <div className="col-md-6">
                  <Sahip selectedProduct={selectedProduct} />
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
