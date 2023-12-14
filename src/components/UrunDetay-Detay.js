import { useSelector } from "react-redux";
import "../Styles/urundetay-detay.css";
import data from "../data/db.json";

function Detay() {
  const selectedProduct = useSelector((state) => state.product); // productReducer'ı içindeki veriyi alır

  return (selectedProduct.id === data["ilan-ver"].id ? (
    <div>
      <h4 className="fiyat">
        <strong>Fiyat:</strong> {selectedProduct.price}
      </h4>
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
          <strong>Ürün Adı:</strong> {selectedProduct.productName}
        </li>
        <li className="li d-flex gap-2">
          <strong>Kategori:</strong> {selectedProduct.category}
        </li>
        <li className="li d-flex gap-2">
          <strong>Marka:</strong> {selectedProduct.brand}
        </li>
        <li className="li d-flex gap-2">
          <strong>Ürün Adresi:</strong> {selectedProduct.title}
        </li>
      </ul>
    </div>
  ) : (
    <p>Ürün Bulunamadı</p>
  ));
}

export default Detay;
