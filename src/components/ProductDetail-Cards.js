import React from "react";
import "../Styles/ProductDetail-Cards.css";
import { useSelector } from "react-redux";

function Card({ onCardClick }) {
  const selectedProduct = useSelector((state) => state.product); // 'product' reducer'ı içindeki veriyi alır


  return (
    <div className="slide-card row">
      {selectedProduct && (
        Array.isArray(selectedProduct) &&
        selectedProduct.map((product, id) => (
          <div key={id} className="col-md-3 mb-3">
            <div className="card" onClick={() => onCardClick()}>
              {product.selectedFiles && product.selectedFiles.length > 0 && (
               <div>
               {product.selectedFiles && product.selectedFiles.length > 0 && (
                 <div>
                   {product.selectedFiles.map((file, index) => (
                     <img
                       key={index}
                       src={file.url}
                       className="card-img"
                       alt={`Card ${index + 1}`}
                     />
                   ))}
                 </div>
               )}
             </div>
             
              )}
            </div>

          </div>
        ))
      )}
    </div>

  );
}

export default Card;
