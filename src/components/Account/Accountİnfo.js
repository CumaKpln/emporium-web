import React, { useState } from "react";
import "../../Styles/Account/AccountMenu.css";

import Edit from "./AccountEditButton";

function İnfo() {
  const [name, setName] = useState("Ömer Enes");
  const [surname, setSurname] = useState("Genç");
  const [province, setProvince] = useState("Trabzon");
  const [district, setDistrict] = useState("Akçaabat");
  const [neighbourhood, setNeighbourhood] = useState("Yaylacık");
  const [email, setEmail] = useState("omerenesgenc@gmail.com");
  const [phone, setPhone] = useState("05541510843");
  const [editMod, setEditMod] = useState(false);

  const handleInputChange = (event) => { 
    const { id, value } = event.target;

    switch (id) {
      case "nameInput":
      case "surnameInput":
      case "provinceInput":
      case "districtInput":
      case "neighbourhoodInput":
        // Sadece harf ve boşluk içerebilir
        if (/^[A-Za-z\s]*$/.test(value)) {
          switch (id) {
            case "nameInput":
              setName(value);
              break;
            case "surnameInput":
              setSurname(value);
              break;
            case "provinceInput":
              setProvince(value);
              break;
            case "districtInput":
              setDistrict(value);
              break;
            case "neighbourhoodInput":
              setNeighbourhood(value);
              break;
            default:
              break;
          }
        }
        break;
      case "emailInput":
        setEmail(value);
        break;
      case "phoneInput":
        // Sadece rakam içerebilir ve maksimum 11 hane
        if (/^\d*$/.test(value) && value.length <= 11) {
          setPhone(value);
        }
        break;
      default:
        break;
    }
  };

  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEditClick = () => {
    setEditMod(true);
  };

  const handleSaveClick = () => {
    if (isEmailValid()) {
      // Eğer e-posta doğrulama başarılıysa, veriyi kaydet veya gerekli işlemleri gerçekleştir
      setEditMod(false);
    } else {
      // E-posta doğrulama başarısızsa kullanıcıya uyarı verilebilir
      alert("Geçerli bir e-posta adresi giriniz.");
    }
  };

  return (
    <div className="form">
      <form>
        <h5 className="text-center mb-3">Hesap Bilgilerim</h5>

        <div className="row name-surname">
          <div className="col-md-6">
            <label htmlFor="nameInput" className="form-label">
              Ad
            </label>
            {editMod ? (
              <Edit field="name" value={name} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                disabled
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Adınızı Giriniz."
                value={name}
              />
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="surnameInput" className="form-label">
              Soyad
            </label>
            {editMod ? (
              <Edit field="surname" value={surname} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                disabled
                type="text"
                className="form-control"
                id="surnameInput"
                placeholder="Soyadınızı Giriniz."
                value={surname}
              />
            )}
          </div>
        </div>

        <div className="row province-district-neighborhood">
          <div className="col-md-4">
            <label htmlFor="provinceInput" className="form-label">
              İl
            </label>
            {editMod ? (
              <Edit field="province" value={province} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                disabled
                type="text"
                className="form-control"
                id="provinceInput"
                placeholder="İl Giriniz."
                value={province}
              />
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="districtInput" className="form-label">
              İlçe
            </label>
            {editMod ? (
              <Edit field="district" value={district} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                disabled
                type="text"
                className="form-control"
                id="districtInput"
                placeholder="İlçe Giriniz."
                value={district}
              />
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="neighbourhoodInput" className="form-label">
              Mahalle
            </label>
            {editMod ? (
              <Edit field="neighbourhood" value={neighbourhood} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                disabled
                type="text"
                className="form-control"
                id="neighbourhoodInput"
                placeholder="Mahalle Giriniz."
                value={neighbourhood}
              />
            )}
          </div>
        </div>

        <div className="row mail-phone">
          <div className="col-md-6">
            <label htmlFor="emailInput" className="form-label">
              Email Adresi
            </label>
            {editMod ? (
              <Edit field="email" value={email} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                disabled
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
                value={email}
              />
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneInput" className="form-label">
              Telefon No
            </label>
            {editMod ? (
              <Edit field="phone" value={phone} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                required
                disabled
                type="text"
                className="form-control"
                id="phoneInput"
                placeholder="Telefon Numaranızı Giriniz."
                value={phone}
              />
            )}
          </div>
        </div>

        {editMod ? (
          <div className="row AccountButton">
            <div className="col-md-4">
              <button type="button" className="btn AccountSave" onClick={handleSaveClick}>
                Kaydet
              </button>
            </div>
          </div>
        ) : (
          <div className="row AccountButton">
            <div className="col-md-4">
              <button type="button" className="btn AccountEdit" onClick={handleEditClick}>
                Düzenle
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default İnfo;
