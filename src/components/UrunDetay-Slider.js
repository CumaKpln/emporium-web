import React from "react";
import '../Styles/UrunDetay-Slider.css'

function Slider({ selectedImageIndex, onSliderChange }) {
  const images = [];

  const handleSlide = (index) => {
    onSliderChange(index);
  };
  return (

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
                <div className="w-100 slider-fotos">
                  <img
                    id="slide-img"
                    src={this.props.menuItems.urun.image}

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

  );
}

export default Slider;
