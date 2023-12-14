import React from "react";
import "../Styles/UrunDetay-Cards.css";
import { useSelector } from "react-redux";

function Card() {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="true" href="#/">Ürün Açıklaması</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/">Konumu</a>
          </li>

        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-desc" alt={`Product desc`}>
          {selectedProduct.description}
        </h5>


      </div>
    </div>
  );
}

export default Card;

