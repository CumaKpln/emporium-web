import React, { useState } from "react";
import "../Styles/urunYükle.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import axios from "axios";
// import data from "../data/db.json";


const UrunYükle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState(""); // Alt kategori seçimi için state

  // Ürün bilgileri için state'leri tanımlandı
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [location, setLocation] = useState("");

  // Adımları kontrol etmek için
  const [step, setStep] = useState(1); // Adım adım ilerlemek için state



  // Kategori değiştiğinde alt kategoriyi sıfırla
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubCategory("");
    setStep(1)

  };
  const seSetTitle = () => {
    setStep(3)
    setTitle("")
  }

  // Kategoriye göre alt kategorileri belirleyen bir yardımcı fonksiyon
  const getSubCategories = () => {
    switch (category) {
      case "emlak":
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="Daire">Daire</option>
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
            <option value="Araba">Televizyon</option>
            <option value="motorsiklet">Telefon</option>
          </>
        );
      default:
        return <option value="">Kategori Seçiniz</option>;
        setStep(5)
    }
  };
  // fotoğraf işlemi
  const handleFileChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);
    setSelectedFiles(filesArray)
    setStep(2)

  };

  // Form submit işlemi
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFiles.length > 0) {
      setIsUploaded(true);
    }
    // const response = await axios.post("http://localhost:3000/ilan-ver", {
    //   id: (data["ilan-ver"].id),
    //   selectedFiles,
    //   title,
    //   description,
    //   category,
    //   subCategory,
    //   productName,
    //   price,
    //   brand,
    //   location,
    // });
    // console.log("Ürün bilgileri:", response.data);
  }


  return (
    <>
      <Navbar />
      <div className="container product-update">
        <div className="row">
          <div className="col-md-4 col-sm-2 col-1"></div>
          <div className="col-md-4 col-sm-8 col-10">
            <form onSubmit={handleSubmit}>

              {step === 1 && (
                <div className="product-foto">
                  <label htmlFor="fileInput">Fotoğrafları Seçin:</label>
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    accept="image/*"
                    multiple
                    required
                  />
                </div>
              )}

              {/* Ürün başlığı giriş alanı */}
              {step === 2 && (
                <div className="product-title">
                  <label htmlFor="title">Ürün Başlığı:</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      seSetTitle()
                    }}
                    required
                  />
                </div>
              )}

              {/* Ürün açıklama alanı */}
              {step === 3 && (
                <div className="product-desc">
                  <label htmlFor="description">Ürün Açıklaması:</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
              )}

              {/* Ana kategori seçim alanı */}
              {step === 4 && (
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
              )}

              {/* Alt kategori seçim alanı */}
              {step === 5 && category && (

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
              {step === 6 && (
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
              )}

              {step === 7 && (
                <div className="product-location">
                  <label htmlFor="location">Ürün Konumu:</label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              )}


              {/* alert div i */}
              {/* <div>
                {isUploaded && (
                  <div className="alert alert-info" role="alert">
                    Ürün Yüklendi
                  </div>
                )}
              </div> */}

              {step === 8 && (
                <div className="product-price">
                  <label htmlFor="price">Fiyat:</label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
              )}

              {step === 9 && category !== "emlak" && (
                <div className="product-brand">
                  <label htmlFor="brand">Ürün Markası:</label>
                  <br />
                  <select
                    id="brand"
                    value={brand}
                    required
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option value="">Marka Seçiniz</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                  </select>
                </div>
              )}

              {/* Formun gönderme butonu */}
              <button type="submit">Ürünü Yükle</button>
            </form>
          </div>
          <div className="col-md-4 col-sm-2 col-1"></div>
        </div>
      </div>
      <Footer />

    </>

  );
};

export default UrunYükle;
