import React from "react";
import '../Styles/UrunDetay-Slider.css'
import { useDispatch, useSelector } from "react-redux";

function Slider({ selectedImageIndex, onSliderChange }) {
  // selectedProduct prop'undan selectedFiles dizisini alıyoruz
  const selectedProduct = useSelector((state) => state.selectedProduct)
  return (
    <div className="row">
      <div className="col-md-12">
        {/* Slider yapısı */}
        <div
          id="carouselExample"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className={
                0 === (selectedImageIndex || 0)
                  ? "carousel-item active"
                  : "carousel-item"
              }
            >
              <div className="w-100 slider-fotos">
                {/* Seçili ürüne ait resmi burada gösterebilirsiniz */}
                <img
                  id="slide-img"
                  src={selectedProduct.selectedFiles[0].url} // Doğru yapı
                  alt={`Slide`}
                />
              </div>
            </div>
          </div>
          {/* Daha önceki/sonraki butonlar */}
        </div>
      </div>
      <div className="col-md-6"></div>
    </div>
  );
}

export default Slider;
