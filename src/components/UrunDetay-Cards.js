import React from "react";
import "../Styles/UrunDetay-Cards.css";

function Card({ onCardClick, selectedProduct }) {
  // Eğer selectedProduct null veya undefined ise veya selectedFiles içermiyorsa, boş bir dizi oluştur
  const photos = selectedProduct.selectedFiles[""];

  return (
    <div className="slide-card row">
      {photos.map((photo, index) => (
        <div key={index} className="col-md-3 mb-3">
          <div className="card" onClick={() => onCardClick(index)}>
            {/* Fotoğrafın URL'sini doğrudan al ve src olarak kullan */}
            <img
              src={photo.url}
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

