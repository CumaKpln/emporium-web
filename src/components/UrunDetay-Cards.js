import React from "react";
import './Card.css'
import foto1 from "./resimler/3.jpg";
import foto2 from "./resimler/indir.jpeg";
import foto3 from "./resimler/vice.jpeg";
import foto4 from "./resimler/O.jpg";
import foto5 from "./resimler/indir1.jpeg";
import foto6 from "./resimler/kuş.jpeg";

function Card({ onCardClick }) {
  const photos = [foto1, foto2, foto3, foto4, foto5, foto6];

  return (
      <div className="slid-card row">
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
