import React from "react";

import "../Styles/ProductDetail-Slider.css"; // Stil dosyası içeri aktarılır
import { useSelector } from "react-redux";

function Slider({ selectedImageIndex }) {
  // Redux'tan seçili ürünün bilgisini almak için useSelector hook'u kullanılır
  const selectedProduct = useSelector((state) => state.selectedProduct);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {/* Slider yapısı */}
          <div
            id="carouselExample"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {selectedProduct &&
                Array.isArray(selectedProduct) &&
                selectedProduct.length > 0 &&
                selectedProduct.map((product, index) => (
                  <div
                    key={index}
                    className={
                      0 === (selectedImageIndex || 0)
                        ? "carousel-item active"
                        : "carousel-item"
                    }
                  >
                    <div className="w-100 slider-fotos">
                      {/* Seçili ürüne ait resim */}
                      {product.selectedFiles &&
                        Array.isArray(product.selectedFiles) &&
                        product.selectedFiles.length > 0 && (
                          <img
                            id={`slide-img-${index}`}
                            src={product.selectedFiles[0].url} // Seçili ürüne ait resim URL'si
                            alt={`Slide`}
                          />
                        )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Daha önceki/sonraki butonlar buraya eklenebilir */}
        </div>
      </div>
      <div className="col-md-6"></div>
      {/* Diğer bileşenler için bir boşluk */}
    </>
  )}

export default Slider;