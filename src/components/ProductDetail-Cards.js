import React from "react";
import "../Styles/ProductDetail-Cards.css";
import { useSelector } from "react-redux";

function Card({ onCardClick }) {
  const selectedProduct = useSelector((state) => state.selectedProduct);

  return (
    <div className="slide-card row">
      {Array.isArray(selectedProduct) && selectedProduct.length > 0 ? (
        selectedProduct.map((product, id) => (
          <div key={id} className="col-md-3 mb-3">
            <div className="card" onClick={() => onCardClick(id)}>
              {product.selectedFiles && product.selectedFiles.length > id && (
                <img
                  src={product.selectedFiles[0].url}
                  className="card-img"
                  alt={`Card ${id + 1}`} />

              )} {/* Burada `id` kullanılmalı */}
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default Card;
