import React, { useState } from "react";
import "../Styles/UploadProduct.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const UploadProduct = () => {
  const [productTitle, setProductTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState(""); // Alt kategori seçimi için state
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [images, setİmages] = useState([]);
  const [squareMeters, setSquareMeters] = useState("");
  const [color, setColor] = useState("");
  const [series, setSeries] = useState("");
  const [gear, setGear] = useState("");
  const [ram, setRam] = useState("");
  const [processor, setProcessor] = useState("");
  const [memory, setMemory] = useState("");
  const [room, setRoom] = useState("");
  const [gpu, setGpu] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [neigbourhood, setNeigbourhood] = useState("");
  const [propertyType, setPropertyType] = useState("");

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
            <option value="land">Arsa</option>
            <option value="home">Ev</option>
          </>
        );
      case "vasıta":
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="car">Araba</option>
            <option value="motorcycle">Motorsiklet</option>
          </>
        );
      case "elektronik-esya":
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="computer">Bilgisayar</option>
            <option value="phone">Telefon</option>
          </>
        );
      default:
        return <option value="">Kategori Seçiniz</option>;
    }
  };

  const handleFileChange = async (event) => {
    const images =  event.target.files;
    const filesArray = Array.from(images);
    setİmages(filesArray);
  };
 const token= localStorage.getItem('token');
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Gerekli tüm verileri içeren datasToProduct objesini oluşturuyoruz
    const datasToProduct = {
      productTitle,
      description,
      category,
      subcategory,
      productName,
      price,
      brand,
      images,
      squareMeters,
      color,
      series,
      gear,
      ram,
      processor,
      memory,
      room,
      gpu,
      province,
      district,
      neigbourhood,
      propertyType,
    };
    console.log(datasToProduct)

    // Veri mevcut ve veri uzunluğu 0'dan büyükse, isteği gönder
    await axios.post("https://mysql-emporium-deploy1.onrender.com/product/product-post", datasToProduct, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": 'multipart/form-data'
      }
    })
      .then((response) => {
        // Başarılı bir şekilde istek gönderildiğinde başarılı bir toast göster
        toast.success("Ürün başarıyla Yüklendi!");
        console.log("İstek başarılı. Yanıt:", response.data);
      })
      .catch((error) => {
        // Hata durumunda hatayı toast olarak göster ve konsola yaz
        toast.error("Ürün yükleme başarısız oldu.");
        console.error("İstek hatası:", error);
      });

  }

  // // DatasToProduct state'ini sıfırlamak için boş bir obje ataması yapılır
  // setDatasToProduct({
  //   productTitle: "",
  //   description: "",
  //   category: "",
  //   subcategory: "",
  //   productName: "",
  //   price: "",
  //   brand: "",
  //   images: [],
  //   squareMeters: "",
  //   color: "",
  //   series: "",
  //   gear: "",
  //   ram: "",
  //   processor: "",
  //   memory: "",
  //   room: "",
  //   gpu: "",
  //   province: "",
  //   district: "",
  //   neigbourhood: "",
  //   propertyType: "",
  // });




  return (
    <>
      <Toaster />

      <Navbar />
      <div className="container product-update mt-5 mb-5">
        <div className="row">
          <div className="col-md-4 col-sm-2 col-1"></div>
          <div className="col-md-4 col-sm-8 col-10">
            <form >
              <div className="product-foto">
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  accept="image/*"
                  // width="100"
                  // height="auto"
                  multiple
                  required
                />
              </div>
              {/* Ürün başlığı giriş alanı */}
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
              <div className="product-title">
                <label htmlFor="title">Ürün Başlığı:</label>
                <input
                  type="text"
                  id="title"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  required
                />
              </div>
              <div className="product-desc">
                <label htmlFor="description">Ürün Açıklaması:</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              {/* Ürün açıklama alanı */}
              <div className="product-pro">
                <label htmlFor="province">İl:</label>
                <input
                  type="text"
                  id="province"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  required
                />
              </div>
              <div className="product-dist">
                <label htmlFor="district">İlçe:</label>
                <input
                  type="text"
                  id="district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                />
              </div>
              <div className="product-neigbor">
                <label htmlFor="neigborhood">Mahalle:</label>
                <input
                  type="text"
                  id="neigborhood"
                  value={neigbourhood}
                  onChange={(e) => setNeigbourhood(e.target.value)}
                  required
                />
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
                    value={subcategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    required
                  >
                    {getSubCategories()}
                  </select>
                </div>
              )}

              {category === "emlak" && (
                <div className="product-squareMeters">
                  <label htmlFor="squareMeters">{subcategory} m2'si:</label>
                  <input
                    type="text"
                    id="squareMeters"
                    value={squareMeters}
                    onChange={(e) => setSquareMeters(e.target.value)}
                    required
                  />
                </div>
              )}

              {subcategory === "home" && (
                <div>
                  <div className="product-productRoom">
                    <label htmlFor="productRoom">Emlak Tipi:</label>
                    <select
                      id="productRoom"
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                      required
                    >
                      <option value="">Oda Sayısını Seçiniz</option>
                      <option value="emlak">2+1</option>
                      <option value="vasıta">3+1</option>
                    </select>
                  </div>

                  <div className="product-propertyType">
                    <label htmlFor="propertyType">Emlak Tipi:</label>
                    <select

                      id="propertyType"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      required
                    >
                      <option value="">Emlak Tipi Seçiniz</option>
                      <option value="emlak">Kiralık</option>
                      <option value="vasıta">Satılık</option>
                    </select>
                  </div>
                </div>
              )}

              {(category === "vasıta" || category === "elektronik-esya") && (
                <div>
                  <div className="product-brand">
                    <label htmlFor="brand">Markası:</label>
                    <br />
                    <input
                      type="text"
                      id="brand"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      required
                    />
                  </div>
                  <div className="product-color">
                    <label htmlFor="color"> Renk:</label>
                    <br />
                    <input
                      type="text"
                      id="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      required
                    />
                  </div>
                  <div className="product-serie">
                    <label htmlFor="series"> Model:</label>
                    <br />
                    <input
                      type="text"
                      id="series"
                      value={series}
                      onChange={(e) => setSeries(e.target.value)}
                      required
                    />
                  </div>
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
                <div>
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
                </div>
              )}

              {subcategory === "computer" && (
                <div>
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
                  <div className="product-graphicCard">
                    <label htmlFor="graphicCard">Ekran kartı:</label>
                    <input
                      type="text"
                      id="graphicCard"
                      value={gpu}
                      onChange={(e) => setGpu(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Formun gönderme butonu */}
              <button onClick={handleSubmit} className="submitBtn float-end" type="submit">
                Ürünü Yükle
              </button>
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