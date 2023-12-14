import "../Styles/UrunDetay-Cards.css";
import { useSelector } from "react-redux";

function Card() {
  
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  return (
    <div className="slide-card row">
      {selectedProduct && selectedProduct.selectedFiles && (
        selectedProduct.selectedFiles.map((file, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card">
              <img
                key={index}
                src={file.url}
                className="card-img"
                alt={`Card ${index + 1}`}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Card;
