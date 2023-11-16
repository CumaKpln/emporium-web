import React, { useState } from "react";
import "../Styles/urunYükle.css";

const UrunYükle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState(""); // Alt kategori seçimi için state
  const [district, setDistrict] = useState(""); // Alt ilçe kategori seçimi için state

  // Ürün bilgileri için state'leri tanımlandı
  const [productName, setProductName] = useState("");
  const [productAddress, setProductAddress] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [city, setCity] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);


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
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);
    setSelectedFiles(filesArray);
  };

  // Form submit işlemi
  const handleSubmit = (event) => {
    event.preventDefault();
   
    if (selectedFiles.length > 0) {
      console.log("Seçilen dosyalar:", selectedFiles);
      setIsUploaded(true);
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
      productAddress,
      price,
      brand,
      city,
      district,
      neighbourhood,
    });
    // Burada bu bilgileri bir API'ye göndermek veya işlemek için gerekli adımları yapabilirsiniz.
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setDistrict("");
    setNeighbourhood("");
  };

  const getDistricts = () => {
    switch (city) {
      case "Antalya":
        return (
          <>
            <option value="">İlçe Seçiniz</option>
            <option value="Alanya">Alanya</option>
            <option value="Konyaaltı">Konyaaltı</option>
          </>
        );
      case "İstanbul":
        return (
          <>
            <option value="">İlçe Seçiniz</option>
            <option value="Kadıköy">Kadıköy</option>
            <option value="Esenler">Esenler</option>
          </>
        );
      case "İzmir":
        return (
          <>
            <option value="">İlçe Seçiniz</option>
            <option value="Konak">Konak</option>
            <option value="Menemen">Menemen</option>
          </>
        );
      case "Bursa":
        return (
          <>
            <option value="">İlçe Seçiniz</option>
            <option value="OsmanGazi">OsmanGazi</option>
            <option value="OrhanGazi">OrhanGazi</option>
          </>
        );
      case "Kahramanmaraş":
        return (
          <>
            <option value="">İlçe Seçiniz</option>
            <option value="Onikişubat">Onikişubat</option>
            <option value="Afşin">Afşin</option>
          </>
        );
      default:
    }
  };

  const getNeighbourhoods = () => {
    switch (district) {
      case "Alanya":
        return (
          <>
            <option value="">Mahalle Seçiniz</option>
            <option value="Sugözü">Sugözü</option>
            <option value="Konyaaltı">Konyaaltı</option>
          </>
        );
      case "Kadıköy":
        return (
          <>
            <option value="">Mahalle Seçiniz</option>
            <option value="Moda">Moda</option>
            <option value="Caddebostan">Caddebostan</option>
          </>
        );
      case "Kadıpaşa":
        return (
          <>
            <option value="">Mahalle Seçiniz</option>
            <option value="Birlik">Birlik </option>
            <option value="Dİnek">Dİnek</option>
          </>
        );
      case "Esenler":
        return (
          <>
            <option value="">Mahalle Seçiniz</option>
            <option value="Fatih">Fatih</option>
            <option value="Çiftehavuzlar">Çiftehavuzlar</option>
          </>
        );
      case "OsmanGazi":
        return (
          <>
            <option value="">Mahalle Seçiniz</option>
            <option value="Panayırlı">Panayırlı</option>
            <option value="Küçükbalıklı">Küçükbalıklı </option>
          </>
        );
      case "OrhanGazi":
        return (
          <>
            <option value="">Mahalle Seçiniz</option>
            <option value="Reşadiye">Reşadiye</option>
            <option value="Muradiye">Muradiye </option>
          </>
        );
      case "Konak":
        return (
          <>
            <option value="">Mahalle Seçiniz</option>
            <option value="Alsancak">Alsancak</option>
            <option value="Basmane">Basmane </option>
          </>
        );
      case "Menemen":
        return (
          <>
            <option value="">Mahalle Seçiniz</option>
            <option value="Reşadiye">Reşadiye</option>
            <option value="Muradiye">Muradiye </option>
          </>
        );
      case "Onikişubat":
        return (
          <>
            <option value="">Mahalle Seçiniz</option>
            <option value="Kavlaklı">Kavlaklı</option>
            <option value="Bin Evler">Bin Evler </option>
          </>
        );
      case "Afşin":
        return (
          <>
            <option value="">Mahalle Seçiniz</option>
            <option value="İncirli">İncirli</option>
            <option value="Deve Boynu">Deve Boynu </option>
          </>
        );

      default:
        return <option value="">Mahalle Seçiniz</option>;
    }
  };

  return (
   
    <div className="container product-update">
      <div className="row">
        <div className="col-md-4 col-sm-2 col-1"></div>
        <div className="col-md-4 col-sm-8 col-10">
          <form onSubmit={handleSubmit}>
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
            <div className="product-adress">
              <label htmlFor="city">İl:</label>
              <br />
              <select
                id="city"
                value={city}
                onChange={handleCityChange}
                required
              >
                <option value="">Şehir Seçiniz</option>
                <option value="Antalya">Antalya</option>
                <option value="İstanbul">İstanbul</option>
                <option value="Bursa">Bursa</option>
                <option value="İzmir">İzmir</option>
                <option value="Kahramanmaraş">Kahramanmaraş</option>
              </select>
            </div>
            {city && (
              <div className="product-district">
                <label htmlFor="district">İlçe:</label>
                <br />
                <select
                  id="district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                >
                  {getDistricts()}
                </select>
              </div>
            )}

            {district && (
              <div className="product-neighbourhood">
                <label htmlFor="neighbourhood">Mahalle:</label>
                <br />
                <select
                  id="neighbourhood"
                  value={neighbourhood}
                  onChange={(e) => setNeighbourhood(e.target.value)}
                  required
                >
                  {getNeighbourhoods()}
                </select>
              </div>
            )}
 <div>
    {isUploaded && (
      <div className="alert alert-info" role="alert">
        Ürün Yüklendi
      </div>
    )}
  </div>
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
            {/*
           
        
            {/* Formun gönderme butonu */}
            <button type="submit">Ürünü Yükle</button>
          </form>
        </div>
        <div className="col-md-4 col-sm-2 col-1"></div>
      </div>
    </div>
  );
};

export default UrunYükle;
