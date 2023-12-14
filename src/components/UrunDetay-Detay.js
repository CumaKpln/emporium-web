import { useSelector } from "react-redux";
import "../Styles/urundetay-detay.css";
import data from "../data/db.json";


function Detay() {
  const selectedProduct = useSelector((state) => state.product); // productReducer'ı içindeki veriyi alır
  // console.log(selectedProduct.selectedProduct)

const cardInfo = selectedProduct.selectedProduct;

  return selectedProduct.id === data["ilan-ver"].id ? (
    <div>
      <h4 className="fiyat">
        <strong>Fiyat:</strong> {cardInfo.price}
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
          <strong>Ürün Adı:</strong>{" "}
          {cardInfo.productName}
        </li>
        <li className="li d-flex gap-2">
          <strong>Kategori:</strong> {cardInfo.category}
        </li>
        <li className="li d-flex gap-2">
          <strong>Marka:</strong> {cardInfo.brand}
        </li>
        <li className="li d-flex gap-2">
          <strong>Ürün Adresi:</strong> {cardInfo.title}
        </li>
      </ul>
    </div>
  ) : (
    <p>Ürün Bulunamadı</p>
  );
}

export default Detay;
