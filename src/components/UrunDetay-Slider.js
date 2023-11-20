import React from "react";
import './slider.css'
import foto1 from "./resimler/3.jpg";
import foto2 from "./resimler/indir.jpeg";
import foto3 from "./resimler/vice.jpeg";
import foto4 from "./resimler/O.jpg";
import foto5 from "./resimler/indir1.jpeg";
import foto6 from "./resimler/kuş.jpeg";

function Slider({ selectedImageIndex, onSliderChange }) {
  const images = [foto1, foto2, foto3, foto4, foto5, foto6];

  const handleSlide = (index) => {
    onSliderChange(index);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
         
          <div
            id="carouselExample"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={
                    index === (selectedImageIndex || 0)
                      ? "carousel-item active"
                      : "carousel-item"
                  }
                >
                 <div  className="w-100 slider-fotos">
                 <img
                  id="slide-img" 
                    src={image}
                    
                    alt={`Slide ${index + 1}`}
                  />
                 </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
              onClick={() =>
                handleSlide(
                  (selectedImageIndex - 1 + images.length) % images.length
                )
              }
            >
              <span
                className="carousel-control-prev-icon bg-dark rounded-3"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
              onClick={() =>
                handleSlide((selectedImageIndex + 1) % images.length)
              }
            >
              <span
                className="carousel-control-next-icon bg-dark rounded-3"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
}

export default Slider;
