import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
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

  const renderFormFields = () => {
    // subCategory'ye göre form alanlarını döndür
    switch (editedProduct?.subCategory) {
      case "Araba":
      case "Motorsiklet":
        return (
          <>
            <Form.Group controlId="formTitle">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                value={editedProduct?.title || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                value={editedProduct?.description || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formProductName">
              <Form.Label>productName</Form.Label>
              <Form.Control
                type="text"
                placeholder="productName"
                value={editedProduct?.productName || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, productName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBrand">
              <Form.Label>Marka</Form.Label>
              <Form.Control
                type="text"
                placeholder="Marka"
                value={editedProduct?.brand || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, brand: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formColor">
              <Form.Label>color</Form.Label>
              <Form.Control
                type="text"
                placeholder="color"
                value={editedProduct?.color || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, color: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formSeries">
              <Form.Label>series</Form.Label>
              <Form.Control
                type="text"
                placeholder="series"
                value={editedProduct?.series || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, series: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formGear">
              <Form.Label>gear</Form.Label>
              <Form.Control
                type="text"
                placeholder="gear"
                value={editedProduct?.gear || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, gear: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formpPrice">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                value={editedProduct?.price || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, price: e.target.value })
                }
              />
            </Form.Group>
            {/* Diğer araba özel form alanları buraya eklenmeli */}
          </>
        );
      case "Ev":
        return (
          <>
            <Form.Group controlId="formTitle">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                value={editedProduct?.title || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    title: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                value={editedProduct?.description || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formProductName">
              <Form.Label>productName</Form.Label>
              <Form.Control
                type="text"
                placeholder="productName"
                value={editedProduct?.productName || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    productName: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formM2">
              <Form.Label>m2</Form.Label>
              <Form.Control
                type="text"
                placeholder="m2"
                value={editedProduct?.m2 || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    m2: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formRooms">
              <Form.Label>rooms</Form.Label>
              <Form.Control
                type="text"
                placeholder="rooms"
                value={editedProduct?.rooms || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    rooms: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                value={editedProduct?.price || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    price: e.target.value,
                  })
                }
              />
            </Form.Group>
            {/* Diğer motorsiklet özel form alanları buraya eklenmeli */}
          </>
        );
        case "Arsa":
          return (
            <>
              <Form.Group controlId="formTitle">
                <Form.Label>title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="title"
                  value={editedProduct?.title || ""}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      title: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                value={editedProduct?.description || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formProductName">
              <Form.Label>productName</Form.Label>
              <Form.Control
                type="text"
                placeholder="productName"
                value={editedProduct?.productName || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, productName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formM2">
              <Form.Label>m2</Form.Label>
              <Form.Control
                type="text"
                placeholder="m2"
                value={editedProduct?.m2 || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, m2: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Fiyat</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fiyat"
                value={editedProduct?.price || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, price: e.target.value })
                }
              />
            </Form.Group>
              {/* Diğer motorsiklet özel form alanları buraya eklenmeli */}
            </>
          );
        case "Telefon":
        return (
          <>
              <Form.Group controlId="formTitle">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                value={editedProduct?.title || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                value={editedProduct?.description || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formProductName">
              <Form.Label>productName</Form.Label>
              <Form.Control
                type="text"
                placeholder="productName"
                value={editedProduct?.productName || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, productName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formBrand">
              <Form.Label>brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="brand"
                value={editedProduct?.brand || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, brand: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formModel">
              <Form.Label>model</Form.Label>
              <Form.Control
                type="text"
                placeholder="model"
                value={editedProduct?.model || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, model: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formColor">
              <Form.Label>color</Form.Label>
              <Form.Control
                type="text"
                placeholder="color"
                value={editedProduct?.color || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, color: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formRam">
              <Form.Label>Ram</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ram"
                value={editedProduct?.ram || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, ram: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formProcessor">
              <Form.Label>processor</Form.Label>
              <Form.Control
                type="text"
                placeholder="processor"
                value={editedProduct?.processor || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, processor: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formMemory">
              <Form.Label>memory</Form.Label>
              <Form.Control
                type="text"
                placeholder="memory"
                value={editedProduct?.memory || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, memory: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Fiyat</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fiyat"
                value={editedProduct?.price || ""}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, price: e.target.value })
                }
              />
            </Form.Group>
            {/* Diğer daire özel form alanları buraya eklenmeli */}
          </>
        );
        case "Bilgisayar":
        return (
          <>
            <Form.Group controlId="formTitle">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                value={editedProduct?.title || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    title: e.target.value,
                  })
                }
              />
            </Form.Group>
                        <Form.Group controlId="formDescription">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                value={editedProduct?.description || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
                        <Form.Group controlId="formProductName">
              <Form.Label>productName</Form.Label>
              <Form.Control
                type="text"
                placeholder="productName"
                value={editedProduct?.productName || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    productName: e.target.value,
                  })
                }
              />
            </Form.Group>
                        <Form.Group controlId="formBrand">
              <Form.Label>brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="brand"
                value={editedProduct?.brand || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    brand: e.target.value,
                  })
                }
              />
            </Form.Group>
                        <Form.Group controlId="formModel">
              <Form.Label>model</Form.Label>
              <Form.Control
                type="text"
                placeholder="model"
                value={editedProduct?.model || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    model: e.target.value,
                  })
                }
              />
            </Form.Group>
                        <Form.Group controlId="formRam">
              <Form.Label>ram</Form.Label>
              <Form.Control
                type="text"
                placeholder="ram"
                value={editedProduct?.ram || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    ram: e.target.value,
                  })
                }
              />
            </Form.Group>
                        <Form.Group controlId="formGPU">
              <Form.Label>GPU</Form.Label>
              <Form.Control
                type="text"
                placeholder="GPU"
                value={editedProduct?.GPU || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    GPU: e.target.value,
                  })
                }
              />
            </Form.Group>
                        <Form.Group controlId="formProcessor">
              <Form.Label>processor</Form.Label>
              <Form.Control
                type="text"
                placeholder="processor"
                value={editedProduct?.processor || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    processor: e.target.value,
                  })
                }
              />
            </Form.Group>
                        <Form.Group controlId="formMemory">
              <Form.Label>memory</Form.Label>
              <Form.Control
                type="text"
                placeholder="memory"
                value={editedProduct?.memory || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    memory: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                value={editedProduct?.price || ""}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    price: e.target.value,
                  })
                }
              />
            </Form.Group>
            {/* Diğer motorsiklet özel form alanları buraya eklenmeli */}
          </>
        );
      default:
        return null;
    }
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
          <Form>
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

export default UrunBilgileri;