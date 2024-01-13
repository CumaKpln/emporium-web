import React from "react";
import { useSelector } from "react-redux";
import "../../../Styles/Product-Detail/Detail.css";

function Detail() {
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  console.log(selectedProduct)
  const productDetail = selectedProduct.details;
  
  return (
    <div className="detail">
      <ul
        className="mt-5"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h5>Fiyat :{productDetail.price} TL</h5>
        <p className="mt-2">
          <span> <b >{selectedProduct.province}</b> </span>/<span> <b>{selectedProduct.district}</b> </span>/<span> <b>{selectedProduct.neighbourhood}</b></span>
        </p>
        <li className="mt-3"><b>Ürün Adı :</b> {selectedProduct.productName}</li>
        <hr style={{ margin: "1px 0px" }} />
        <li><b>Kategori :</b>  {selectedProduct.category}</li>
        <hr style={{ margin: "1px 0px" }} />
        <li><b>Alt Kategori :</b>  {selectedProduct.subcategory} </li>
        <hr style={{ margin: "1px 0px" }} />
        {selectedProduct.subcategory === "land" && (
          <>
            <li><b>m2 :</b>{productDetail.squareMeters} </li> <hr style={{ margin: "1px 0px" }} />
            <li><b>Emlak Tipi :</b>{productDetail.propertyType} </li> <hr style={{ margin: "1px 0px" }} />
          </>
        )}

        {selectedProduct.subcategory === "home" && (
          <>
            <li><b>m2 :</b>{productDetail.squareMeters} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Emlak Tipi :</b>{productDetail.propertyType} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Oda Sayısı :</b>{productDetail.room} </li>
            <hr style={{ margin: "1px 0px" }} />
          </>
        )}
        {selectedProduct.category === "vasıta" && (
          <>
            <li><b>Renk :</b>{productDetail.color} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Marka :</b>{productDetail.brand} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Vites :</b>{productDetail.gear} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Seri :</b>{productDetail.series} </li>
            <hr style={{ margin: "1px 0px" }} />
          </>
        )}

        {selectedProduct.subcategory === "computer" && (
          <>
            <li><b>Renk :</b>{productDetail.color} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Marka :</b>{productDetail.brand} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Ram Bellek :</b>{productDetail.ram} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>İşlemci :</b>{productDetail.processor} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Model :</b>{productDetail.model} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Hafıza :</b>{productDetail.memory} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Ekran Kartı :</b>{productDetail.gpu} </li>
            <hr style={{ margin: "1px 0px" }} />
          </>
        )}
        {selectedProduct.subcategory === "phone" && (
          <>
            <li><b>Renk :</b>{productDetail.color} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Marka :</b>{productDetail.brand} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Model :</b>{productDetail.model} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Ram Bellek :</b>{productDetail.ram} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>İşlemci :</b>{productDetail.processor} </li>
            <hr style={{ margin: "1px 0px" }} />
            <li><b>Model :</b>{productDetail.model} </li>
            <hr style={{ margin: "1px 0px" }} />
          </>
        )}
      </ul>
    </div>
  );
}

export default Detail;
