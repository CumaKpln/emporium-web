import { useSelector } from "react-redux";
import "../Styles/urundetay-detay.css";
import data from "../data/db.json";

function Detay() {
  const selectedProduct = useSelector((state) => state.product); // productReducer'ı içindeki veriyi alır
  console.log(selectedProduct)
  return (
    <>  
        {selectedProduct.map((product, id) => {
          // Burada her ürünün id'sini eşitleyerek id'si eşit olanı gösterir
          if (selectedProduct.id === data["ilan-ver"].id) {
            return (
              <div key={id}>
                <h4 className="fiyat">
                  <strong>Fiyat:</strong> {product.price}
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
                    <strong>Ürün Adı:</strong> {product.productName}
                  </li>
                  <li className="li d-flex gap-2">
                    <strong>Kategori:</strong> {product.category}
                  </li>
                  <li className="li d-flex gap-2">
                    <strong>Marka:</strong> {product.brand}
                  </li>
                  <li className="li d-flex gap-2">
                    <strong>Ürün Adresi:</strong> {product.title}
                  </li>
                </ul>
              </div>
            );
          }
          return null; // Eğer istenen id'ye sahip ürün bulunamazsa null dönebilir
        })}
    </>
  );
}

export default Detay;
