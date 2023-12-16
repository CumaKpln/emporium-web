import React from "react";
import { useSelector } from "react-redux";
import "../../../Styles/Product-Detail/Detail.css"

function Detail() {
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  console.log(selectedProduct, "Detail");

  return (
    <div className="detail">
      <ul
        className="mt-5"
        style={{
          display:"flex",
          flexDirection:"column",
        }}
      >
        <h5>Fiyat :{selectedProduct.price} TL</h5>
        <p>
          <span> İl </span>/<span> İlçe </span>/<span> Mahalle</span>
        </p>
        <li className="mt-3">Ürün Adı :{selectedProduct.productName}</li>
        <hr style={{ margin: "1px 0px" }} />
        <li>Kategori : {selectedProduct.category}</li>
        <hr style={{ margin: "1px 0px" }} />
        <li>Alt Kategori : {selectedProduct.subCategory} </li>
        <hr style={{ margin: "1px 0px" }} />
        <li>Marka : {selectedProduct.brand} </li>
        <hr style={{ margin: "1px 0px" }} />
        <li>Model : {selectedProduct.series} </li>
      </ul>
    </div>
  );
}

export default Detail;
