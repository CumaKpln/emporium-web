import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "../../Styles/Account/AccountProductİnformation.css";
// import data from "../../data/db.json";
import axios from "axios";

function ProductInfo() {
  const token = localStorage.getItem("token");

  const [products, setProducts] = useState();
  const [showModal, setShowModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});
  const [editedImages, setEditedImages] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const handleGearChange = (e) => {
    setEditedProduct({ ...editedProduct, gear: e.target.value });
  };
  const handleRoomChange = (e) => {
    setEditedProduct({ ...editedProduct, room: e.target.value });
  };

  const handleUpdate = () => {
    // Tüm resimlerin silindiği durumu kontrol et
    if (editedImages.length === 0) {
      setShowAlert(true);
      return;
    }

    // Güncelleme işlemi tamamlandıktan sonra products state'ini güncelle
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editedProduct.id
          ? { ...editedProduct, images: editedImages }
          : product
      )
    );

    // Modal'ı kapat, editedProduct'i sıfırla, editedImages'i sıfırla ve uyarıyı kapat
    setShowModal(false);
    setEditedProduct(null);
    setEditedImages([]);
    setShowAlert(false);
  };

  const handleDelete = (id) => {
    const updatedData = products.filter((product) => product.id !== id);
    setProducts(updatedData);
  };

  const handleImageAdd = (e) => {
    const newImages = [];

    Array.from(e.target.files).forEach((file) => {
      // Check if the file type is an image
      if (file.type.startsWith("image/")) {
        newImages.push({ url: URL.createObjectURL(file) });
      }
    });

    setEditedImages([...editedImages, ...newImages]);
  };

  const handleImageRemove = (index) => {
    const newImages = [...editedImages];
    newImages.splice(index, 1);
    setEditedImages(newImages);
  };

  const [userProduct, setUserProduct] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mysql-emporium-deploy1.onrender.com/product/getUserProduct",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data.mergedResult;
      // Eğer response.data.mergedResult boşsa hata kontrolü yapabilirsiniz
      if (data.length === 0) {
        console.log("Kullanıcı verisi bulunamadı veya boş.");
        return;
      }

      setUserProduct(response.data.mergedResult);

      console.log("Kullanıcı verileri başarıyla alındı:", response.data);
    } catch (error) {
      console.error("Kullanıcı hatası:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //modal
  const renderImages = () => {
    return (
      <div className="İmgEdit mb-3">
        {editedProduct?.images?.map((image, index) => (
          <span key={index} className="mr-2 position-relative">
            <img
              src={image.url}
              alt={`Resim-${index + 1}`}
              className="img-thumbnail"
              style={{ width: "100px", height: "100px", margin: "5px" }}
            />
            <button
              type="button"
              className="modalDelete btn btn-sm btn-trash"
              onClick={() => handleImageRemove(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.500 8.5a.5.5 0 0 1-.998.06l-.500-8.5a.5.5 0 0 1 .47-.53zM5 4v8.5a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5 0zm3 0v8.5a.5.5 0 1 1-1 0V4a.5.5 0 0 1 .5 0z" />
              </svg>
            </button>
          </span>
        ))}
        {showAlert && (
          <Alert
            variant="danger"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Tüm resimleri silmek istediğinizden emin misiniz?
          </Alert>
        )}
      </div>
    );
  };

  return (
    <div className="card">
      {userProduct.map((product, id) => (
        <div className="row mb-3 cards" key={id}>
          <div className="col-md-4">
            <img
              // src={userProduct.img1}
              id="AccountMenuİmg"
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
                  Son güncelleme 3 dakika önce
                </small>{" "}
              </p>
              <button
                type="button"
                className="btn AccountProductButton"
                onClick={() => handleEdit(product.id)}
              >
                Düzenle
              </button>
              <button
                className="icon AccountProductButton"
                onClick={() => handleDelete(product.id)}
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
          <Form>
            {renderImages()}
            <Form.Group controlId="formImages">
              <Form.Label>Resimler</Form.Label>
              <Form.Control type="file" multiple onChange={handleImageAdd} />
            </Form.Group>
            {renderFormFields()}
          </Form>
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

export default ProductInfo;
