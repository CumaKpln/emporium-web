import "../Styles/HesapÜrünBilgileri.css";
import data from "../data/db.json";

function UrunBilgileri() {
  return (
    <div className="card">
      {data["ilan-ver"].map((product, id) => (
        <div className="row mb-3 cards">
          <div className="col-md-4">
            <img
              src={product.selectedFiles[0].url}
              className="img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>{" "}
                <button className="icon">
                  <i class="bi bi-trash3"></i>
                </button>
                <button type="button" class="btn">
                  Düzenle
                </button>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UrunBilgileri;
