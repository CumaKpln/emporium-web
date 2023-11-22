import React from "react";
import "../Styles/UrunDetay-Cards.css";




function Card({ onCardClick }) {
  const photos = [];

  return (
      <div className="slide-card row">
        {photos.map((photo, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card" onClick={() => onCardClick(index)}>
              <img
                src={photo}
                className="card-img"
                alt={`Card ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
  );
}

export default Card;
