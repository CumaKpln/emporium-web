// UrunBilgileri.js

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../Styles/HesapÜrünBilgileri.css";
import data from "../data/db.json";

function UrunBilgileri() {
  const [products, setProducts] = useState(data["ilan-ver"]);
  const [showModal, setShowModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);

  const handleEdit = (product) => {
    setEditedProduct(product);
    setShowModal(true);
  };

  const handleUpdate = () => {
    // Güncelleme işlemleri burada yapılacak
    // editedProduct içindeki verileri kullanarak güncelleme işlemlerini gerçekleştirin
    // ...

    // Güncelleme işlemi tamamlandıktan sonra products state'ini güncelle
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editedProduct.id ? editedProduct : product
      )
    );

    // Modal'ı kapat ve editedProduct'i sıfırla
    setShowModal(false);
    setEditedProduct(null);
  };

  const handleDelete = (id) => {
    const updatedData = products.filter((product) => product.id !== id);
    setProducts(updatedData);
  };

  return (
    <div className="card">
      {products.map((urun, id) => (
        <div className="row mb-3 cards" key={id}>
          <div className="col-md-4">
            <img
              src={urun.selectedFiles[0].url}
              id="HesapMenuResim"
              className="img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{urun.title}</h5>
              <p className="card-text">{urun.description}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Son güncelleme 3 dakika önce
                </small>{" "}
              </p>
              <button
                type="button"
                className="btn HesapUrunButon"
                onClick={() => handleEdit(urun)}
              >
                Düzenle
              </button>
              <button
                className="icon HesapUrunButon"
                onClick={() => handleDelete(urun.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Düzenleme Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Düzenle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Düzenleme için gerekli form alanları buraya eklenmeli */}
          {/* Örneğin: */}
          <input
            type="text"
            value={editedProduct?.title || ""}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, title: e.target.value })
            }
          />
          <textarea
            value={editedProduct?.description || ""}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                description: e.target.value,
              })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            İptal
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UrunBilgileri;
