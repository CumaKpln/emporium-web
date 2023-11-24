import React, { useState } from "react";
import "../Styles/HesapBilgiler.css";
import Edit from "./HesapEditButton";

function Bilgiler() {
  const [ad, setAd] = useState("Ömer Enes");
  const [soyad, setSoyad] = useState("Genç");
  const [il, setIl] = useState("Trabzon");
  const [ilce, setIlce] = useState("Akçaabat");
  const [mahalle, setMahalle] = useState("Yaylacık");
  const [email, setEmail] = useState("omerenesgenc@gmail.com");
  const [telefon, setTelefon] = useState("05541510843");
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
      case "adInput":
      case "soyadInput":
      case "ilInput":
      case "ilceInput":
      case "mahalleInput":
        // Sadece harf ve boşluk içerebilir
        if (/^[A-Za-z\s]*$/.test(value)) {
          switch (id) {
            case "adInput":
              setAd(value);
              break;
            case "soyadInput":
              setSoyad(value);
              break;
            case "ilInput":
              setIl(value);
              break;
            case "ilceInput":
              setIlce(value);
              break;
            case "mahalleInput":
              setMahalle(value);
              break;
            default:
              break;
          }
        }
        break;
      case "emailInput":
        setEmail(value);
        break;
      case "telefonInput":
        // Sadece rakam içerebilir ve maksimum 11 hane
        if (/^\d*$/.test(value) && value.length <= 11) {
          setTelefon(value);
        }
        break;
      default:
        break;
    }
  };

  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleDuzenleClick = () => {
    setDuzenlemeModu(true);
  };

  const handleKaydetClick = () => {
    if (isEmailValid()) {
      // Eğer e-posta doğrulama başarılıysa, veriyi kaydet veya gerekli işlemleri gerçekleştir
      setDuzenlemeModu(false);
    } else {
      // E-posta doğrulama başarısızsa kullanıcıya uyarı verilebilir
      alert("Geçerli bir e-posta adresi giriniz.");
    }
  };

  return (
    <div className="form">
      <form>
        <h5 className="text-center mb-3">Hesap Bilgilerim</h5>

        <div className="row ad-soyad">
          <div className="col-md-6">
            <label htmlFor="adInput" className="form-label">
              Ad
            </label>
            {duzenlemeModu ? (
              <Edit field="ad" value={ad} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                disabled
                type="text"
                className="form-control"
                id="adInput"
                placeholder="Adınızı Giriniz."
                value={ad}
              />
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="soyadInput" className="form-label">
              Soyad
            </label>
            {duzenlemeModu ? (
              <Edit field="soyad" value={soyad} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                disabled
                type="text"
                className="form-control"
                id="soyadInput"
                placeholder="Soyadınızı Giriniz."
                value={soyad}
              />
            )}
          </div>
        </div>

        <div className="row il-ilce-mahalle">
          <div className="col-md-4">
            <label htmlFor="ilInput" className="form-label">
              İl
            </label>
            {duzenlemeModu ? (
              <Edit field="il" value={il} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                disabled
                type="text"
                className="form-control"
                id="ilInput"
                placeholder="İl Giriniz."
                value={il}
              />
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="ilceInput" className="form-label">
              İlçe
            </label>
            {duzenlemeModu ? (
              <Edit field="ilce" value={ilce} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                disabled
                type="text"
                className="form-control"
                id="ilceInput"
                placeholder="İlçe Giriniz."
                value={ilce}
              />
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="mahalleInput" className="form-label">
              Mahalle
            </label>
            {duzenlemeModu ? (
              <Edit field="mahalle" value={mahalle} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                disabled
                type="text"
                className="form-control"
                id="mahalleInput"
                placeholder="Mahalle Giriniz."
                value={mahalle}
              />
            )}
          </div>
        </div>

        <div className="row mail-telefon">
          <div className="col-md-6">
            <label htmlFor="emailInput" className="form-label">
              Email Adresi
            </label>
            {duzenlemeModu ? (
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
            <label htmlFor="telefonInput" className="form-label">
              Telefon No
            </label>
            {duzenlemeModu ? (
              <Edit field="telefon" value={telefon} onChange={(e) => handleInputChange(e)} />
            ) : (
              <input
                required
                disabled
                type="text"
                className="form-control"
                id="telefonInput"
                placeholder="Telefon Numaranızı Giriniz."
                value={telefon}
              />
            )}
          </div>
        </div>

        {duzenlemeModu ? (
          <div className="row HesapButon">
            <div className="col-md-4">
              <button type="button" className="btn HesapKaydet" onClick={handleKaydetClick}>
                Kaydet
              </button>
            </div>
          </div>
        ) : (
          <div className="row HesapButon">
            <div className="col-md-4">
              <button type="button" className="btn HesapDuzenle" onClick={handleDuzenleClick}>
                Düzenle
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Bilgiler;
