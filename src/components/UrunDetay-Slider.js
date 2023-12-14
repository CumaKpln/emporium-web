import React from "react";
import "../Styles/UrunDetay-Slider.css"; // Stil dosyası içeri aktarılır
import { useSelector } from "react-redux";

function Slider({ selectedImageIndex }) {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  return selectedProduct ? (
    <div className="row">
      <div className="col-md-12">
        {/* Slider yapısı */}
        <div id="carouselExample" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div
              className={
                0 === (selectedImageIndex || 0) ? "carousel-item active" : "carousel-item"
              }
            >
              <div className="w-100 slider-fotos">
                {/* Seçili ürüne ait resim */}
                {selectedProduct.selectedFiles &&
                  Array.isArray(selectedProduct.selectedFiles) &&
                  selectedProduct.selectedFiles.length > 0 && (
                    <img
                      id={`slide-img-}`}
                      src={selectedProduct.selectedFiles[0].url} // Seçili ürüne ait resim URL'si
                      alt={`Slide`}
                    />
                  )}
              </div>
            </div>
          </div>
          {/* Daha önceki/sonraki butonlar buraya eklenebilir */}
        </div>
      </div>
      <div className="col-md-6"></div>{" "}
      {/* Diğer bileşenler için bir boşluk */}
    </div>
  ) : (
    <p>Ürün Bulunamadı</p>
  );
}

export default Slider;
