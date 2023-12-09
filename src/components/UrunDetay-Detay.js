import { useSelector } from "react-redux";
import "../Styles/urundetay-detay.css";
import data from "../data/db.json";


function Detay() {
  const selectedProduct = useSelector((state) => state.selectedProduct);



  return (
    <>
      {selectedProduct &&
        Array.isArray(selectedProduct) &&
        selectedProduct.length > 0 &&
        selectedProduct.map((product, id) => (

          <div key={id}>
            <h4 className="fiyat"><strong>Fiyat:</strong> {product.price}</h4>
            <ul className="detay">
              <div>il/ilçe/mahalle</div>
              <hr />
              <li className="li d-flex gap-2">
                <strong>İlan No:</strong> <div>djkfbas</div>
              </li>
              <li className="li d-flex gap-2">
                <strong>İlan Tarihi:</strong>
              </li>
              <li className="li d-flex gap-2">
                <strong>Ürün Adı:</strong>
                {product.productName}</li>
              <li className="li d-flex gap-2">
                <strong>Kategori:</strong>
                {product.category}</li>
              <li className="li d-flex gap-2">
                <strong>Marka:</strong>
                {product.brand}</li>
              <li className="li d-flex gap-2">
                <strong>Ürün Adresi:</strong>
                {product.productName}</li>
            </ul>
          </div>
        ))}
    </>
  );
}

export default Detay;

