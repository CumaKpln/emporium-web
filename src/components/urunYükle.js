import React, { useState } from "react";
import "../Styles/urunYükle.css";
import Navbar from "./Navbar";

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productImage: null,
    productTitle: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      productImage: file,
    });
  };

  const getSubCategories = () => {
    switch (category) {
      case "emlak":
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="Ev">Ev</option>
            <option value="Arsa">Arsa</option>
          </>
        );
      case "taşıt":
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="Araba">Araba</option>
            <option value="Motorsiklet">Motorsiklet</option>
          </>
        );
      case "elektronik-esya":
        return (
          <>
            <option value="">Alt Kategori Seçiniz</option>
            <option value="Televizyon">Televizyon</option>
            <option value="Telefon">Telefon</option>
          </>
        );
      default:
        return <option value="">Kategori Seçiniz</option>;
    }
  };
  const handleSubmit = () => {
    // Ürünü yükleme işlemi burada gerçekleştirilebilir
    console.log("Ürün yükleme işlemi tamamlandı:", formData);
    // ... Ürün yükleme işlemi yapılabilir
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Ürün Yükleme Sayfası- Adım {step}</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="step-form">
              {/*step of product name's  */}
              {step === 1 && (
                <>
                  <h2> Ürün Bilgileri</h2>
                  <label className="mb-3">
                    Ürün Adı:
                    <input
                    className="inputText"
                      type="text"
                      name="productName"
                      value={formData.productName}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <div className="button-group ">
                    <button className="next-btn step1-btn" onClick={nextStep}>
                      Sonraki
                    </button>
                  </div>
                </>
              )}
              {/*step of product title's  */}
              {step === 2 && (
                <>
                  <h2>Ürün Başlığı</h2>
                  <label>
                    Ürün Başlığı:
                    <input
                    className="inputText"
                      type="text"
                      name="productTitle"
                      value={formData.productTitle}
                      onChange={handleInputChange}
                      required
                    ></input>
                  </label>
                  <div className="button-group ">
                   
                    <button className="next-btn  step1-btn" onClick={nextStep}>
                      Sonraki
                    </button>
                    <button className="prev-btn step1-btn" onClick={prevStep}>
                      Geri
                    </button>
                  </div>
                </>
              )}
              {/*step of product description's  */}
              {step === 3 && (
                <>
                  <h2>Ürün Açıklaması</h2>
                  <label>
                    Ürün Açıklaması:
                    <textarea
                    className="inputText"
                      name="productDescription"
                      value={formData.productDescription}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </label>
                  <div className="button-group step1-btn">
                    <button className="prev-btn" onClick={prevStep}>
                      Geri
                    </button>
                    <button className="next-btn " onClick={nextStep}>
                      Sonraki
                    </button>
                  </div>
                </>
              )}
              {/*step of product photo's  */}
              {step === 4 && (
                <>
                  <h2> Ürün Resmi</h2>
                  <input type="file"className="inputText" onChange={handleImageChange} required />
                  <div className="button-group step1-btn">
                    <button className="prev-btn" onClick={prevStep}>
                      Geri
                    </button>
                    <button className="next-btn" onClick={nextStep}>
                      Sonraki
                    </button>
                  </div>
                </>
              )}
              {/*step of product category's  */}
              {step === 5 && (
                <div className="product-category">
                  <label htmlFor="category">Kategori:</label>
                  <select
                  className="inputText"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="">Kategori Seçiniz</option>
                    <option value="emlak">Emlak</option>
                    <option value="taşıt">Taşıt</option>
                    <option value="elektronik-esya">Elektronik eşya</option>
                  </select>
                  <div className="button-group step1-btn">
                    <button className="prev-btn" onClick={prevStep}>
                      Geri
                    </button>
                    <button className="next-btn" onClick={nextStep}>
                      Sonraki
                    </button>
                  </div>
                </div>
              )}
              {/*step of product subCategory's  */}
              {category && step === 6 && (
                <div className="product-subCategory">
                  <label htmlFor="subCategory">Alt Kategori:</label>
                  <select
                  className="inputText"
                    id="subCategory"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    required
                  >
                    {getSubCategories()}
                  </select>
                  <div className="button-group step1-btn">
                    <button className="prev-btn" onClick={prevStep}>
                      Geri
                    </button>
                    <button className="submit-btn" onClick={nextStep}>
                      Sonraki
                    </button>
                  </div>
                </div>
              )}
              {/* product m2 step */}
              {category === "emlak" && step === 7 && (
                <>
                  <label>
                    {subCategory} m2'si :
                    <input
                    className="inputText"
                      type="text"
                      name="productm2"
                      value={formData.productm2}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <div className="button-group step1-btn">
                    <button className="prev-btn" onClick={prevStep}>
                      Geri
                    </button>
                    <button className="submit-btn" onClick={nextStep}>
                      Sonraki
                    </button>
                  </div>
                </>
              )}
              {/* number of rooms in the house*/}
              {subCategory === "Ev" && step === 8 && (
                <>
                  <label>
                    Ev'in Oda Sayısı:
                    <input
                    className="inputText"
                      type="text"
                      name="productRoom"
                      value={formData.productRoom}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <div className="button-group step1-btn">
                    <button className="prev-btn" onClick={prevStep}>
                      Geri
                    </button>
                    <button className="submit-btn" onClick={nextStep}>
                      Sonraki
                    </button>
                  </div>
                </>
              )}
              {subCategory === "Ev" && step === 9 && (
                <>
                  <label>
                    Ürün Fiyatı:
                    <input
                    className="inputText"
                      type="number"
                      name="productPrice"
                      value={formData.productPrice}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <div className="button-group step1-btn">
                    <button className="prev-btn" onClick={prevStep}>
                      Geri
                    </button>
                    <button className="submit-btn" onClick={nextStep}>
                      Sonraki
                    </button>
                  </div>
                </>
              )}

              {step === 10 && (
                <>
                  <h2>Onay</h2>
                  <p>Ürün Adı: {formData.productName}</p>
                  <p>Ürün Açıklaması: {formData.productDescription}</p>
                  <p>Ürün Başlığı: {formData.productTitle}</p>
                  <p>Ürün Kategorisi: {formData.handleKategoriChange}</p>
                  <p>Ürün Alt Kategorisi: {formData.handleSubcategoryChange}</p>
                  <p>Evin m2'si: {formData.productm2}</p>
                  {subCategory === "Ev"  ? (
                    <p>Evin Oda Sayısı: {formData.productRoom}</p>
                  ): null
                }

                  <p>
                    Ürün Resmi:
                    {formData.productImage ? formData.productImage.name : ""}
                  </p>
                  <div className="button-group">
                    <button className="prev-btn" onClick={prevStep}>
                      Geri
                    </button>
                    <button className="submit-btn" onClick={handleSubmit}>
                      Yükle
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepForm;
