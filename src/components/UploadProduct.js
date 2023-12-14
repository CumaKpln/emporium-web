import React, { useState } from "react";
import "../Styles/UploadProduct.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const UploadProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState(""); // Alt kategori seçimi için state

  // Ürün bilgileri için state'leri tanımlandı
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [photos, sePhotos] = useState([]);
  const [m2, setM2] = useState("");
  const [color, setColor] = useState("");
  const [serie, setSerie] = useState("");
  const [gear, setGear] = useState("");
  const [ram, setRam] = useState("");
  const [processor, setProcessor] = useState("");
  const [memory, setMemory] = useState("");
  const [productRoom, setProductRoom] = useState("");
  const [graphicCard, setGraphicCard] = useState("");

  // Kategori değiştiğinde alt kategoriyi sıfırla
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubCategory("");
  };

  // Kategoriye göre alt kategorileri belirleyen bir yardımcı fonksiyon
  const getSubCategories = () => {
    switch (category) {
      case "emlak":
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="arsa">Arsa</option>
            <option value="ev">Ev</option>
          </>
        );
      case "vasıta":
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="Araba">Araba</option>
            <option value="motorsiklet">Motorsiklet</option>
          </>
        );
      case "elektronik-esya":
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="bilgisayar">Bilgisayar</option>
            <option value="motorsiklet">Telefon</option>
          </>
        );
      default:
        return <option value="">Kategori Seçiniz</option>;
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);
    sePhotos(filesArray);
  };

  // Form submit işlemi
  const handleSubmit = (event) => {
    event.preventDefault();

    if (photos.length > 0) {
      console.log("Seçilen dosyalar:", photos);

      // apiden geri çağırma işlemleri burada yapılacak//
    } else {
      alert("Lütfen fotoğraf yükleyiniz");
    }
    console.log("Ürün bilgileri:", {
      title,
      description,
      category,
      subCategory,
      productName,
      price,
      brand,
      photos,
    });
    // Burada bu bilgileri bir API'ye göndermek veya işlemek için gerekli adımları yapabilirsiniz.
  };

  return (
    <>
      <Navbar />
      <div className="container product-update mt-5 mb-5">
        <div className="row">
          <div className="col-md-4 col-sm-2 col-1"></div>
          <div className="col-md-4 col-sm-8 col-10">
            <form onSubmit={handleSubmit}>
              <div className="product-foto">
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  accept="image/*"
                  multiple
                  required
                />
              </div>

              {/* Ürün başlığı giriş alanı */}
              <div className="product-title">
                <label htmlFor="title">Ürün Başlığı:</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Ürün açıklama alanı */}
              <div className="product-desc">
                <label htmlFor="description">Ürün Açıklaması:</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              {/* Ana kategori seçim alanı */}
              <div className="product-category">
                <label htmlFor="category">Kategori:</label>
                <select
                  id="category"
                  value={category}
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Kategori Seçiniz</option>
                  <option value="emlak">Emlak</option>
                  <option value="vasıta">Vasıta</option>
                  <option value="elektronik-esya">Elektronik Eşya</option>
                </select>
              </div>

              {/* Alt kategori seçim alanı */}
              {category && (
                <div className="product-subCategory">
                  <label htmlFor="subCategory">Alt Kategori:</label>
                  <select
                    id="subCategory"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    required
                  >
                    {getSubCategories()}
                  </select>
                </div>
              )}

              {/* Diğer ürün bilgileri giriş alanları */}
              <div className="product-name">
                <label htmlFor="productName">Ürün Adı:</label>
                <input
                  type="text"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>

              {/*---------------------------------------------------------------------- */}

              {category === "emlak" && (
                <div className="product-m2">
                  <label htmlFor="productM2">{subCategory} m2'si:</label>
                  <input
                    type="text"
                    id="productm2"
                    value={m2}
                    onChange={(e) => setM2(e.target.value)}
                    required
                  />
                </div>
              )}

              {subCategory === "ev" && (
                <div className="product-room">
                  <label htmlFor="productRoom">Oda Sayısı:</label>
                  <input
                    type="text"
                    id="productRoom"
                    value={productRoom}
                    onChange={(e) => setProductRoom(e.target.value)}
                    required
                  />
                </div>
              )}

              {/*---------------------------------------------------------------------- */}
              {/*  Ürün marka giriş  */}
              {(category === "vasıta" || category === "elektronik-esya") && (
                <div className="product-brand">
                  <label htmlFor="brand">Ürün Markası:</label>
                  <br />
                  <input
                    type="text"
                    id="brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
                  />
                </div>
              )}

              {/* Ürün marka model  */}
              {(category === "vasıta" || category === "elektronik-esya") && (
                <div className="product-serie">
                  <label htmlFor="serie">Ürün modeli:</label>
                  <br />
                  <input
                    type="text"
                    id="serie"
                    value={serie}
                    onChange={(e) => setSerie(e.target.value)}
                    required
                  />
                </div>
              )}

              {/* Ürün Rengi giriş  */}
              {(category === "vasıta" || category === "elektronik-esya") && (
                <div className="product-color">
                  <label htmlFor="color">Ürün Rengi:</label>
                  <br />
                  <input
                    type="text"
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                  />
                </div>
              )}

              {/* Ürün vasıta vites giriş  */}
              {category === "vasıta" && (
                <div className="product-gear">
                  <label htmlFor="gear">Vites:</label>
                  <br />
                  <input
                    type="text"
                    id="gear"
                    value={gear}
                    onChange={(e) => setGear(e.target.value)}
                    required
                  />
                </div>
              )}

              {category === "elektronik-esya" && (
                <div className="product-ram">
                  <label htmlFor="ram">Ram Bellek :</label>
                  <br />
                  <input
                    type="text"
                    id="ram"
                    value={ram}
                    onChange={(e) => setRam(e.target.value)}
                    required
                  />
                </div>
              )}
              {category === "elektronik-esya" && (
                <div>
                  <div className="product-processor">
                  <label htmlFor="processor">İşlemci:</label>
                  <input
                    type="text"
                    id="processor"
                    value={processor}
                    onChange={(e) => setProcessor(e.target.value)}
                    required
                  />
                </div>
                <div className="product-memory">
                  <label htmlFor="memory">Hafıza:</label>
                  <input
                    type="text"
                    id="memory"
                    value={memory}
                    onChange={(e) => setMemory(e.target.value)}
                    required
                  />
                </div>
                </div>
                
              )}
           

              {subCategory === "bilgisayar" && (
                <div className="product-graphicCard">
                  <label htmlFor="graphicCard">Ekran kartı:</label>
                  <input
                    type="text"
                    id="graphicCard"
                    value={graphicCard}
                    onChange={(e) => setGraphicCard(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="product-price">
                <label htmlFor="price">Fiyat:</label>
                <input
                  type="text"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              {/* Formun gönderme butonu */}
              <button id="submitBtn" type="submit">Ürünü Yükle</button>
            </form>
          </div>
          <div className="col-md-4 col-sm-2 col-1"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UploadProduct;
