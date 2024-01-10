import React, {  useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Stil dosyasını ekleyin
import Edit from "./AccountEditButton";
import "../../Styles/Account/AccountInfo.css";
import axios from "axios"

function İnfo() {
  const token = localStorage.getItem("token" )
  const [name, setName] = useState("Ömer Enes");
  const [date, setDate] = useState("");
  const [data, setData] = useState("");
  const [email, setEmail] = useState("omerenesgenc@gmail.com");
  const [phone, setPhone] = useState("+90 554 151 0843");
  const [editMod, setEditMod] = useState(false);

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
      case "nameInput":
      case "surnameInput":
        // Sadece harf ve boşluk içerebilir
        if (/^[A-Za-z\s]*$/.test(value)) {
          switch (id) {
            case "nameInput":
              setName(value);
              break;
            case "surnameInput":
              setDate(value);
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


  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://mysql-emporium-deploy1.onrender.com/user/userInfo",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  
  //     // Kullanıcı bilgilerini consola yazdır
  //     console.log("Kullanıcı Bilgileri:", response.data);
  
  //     // Diğer işlemleri gerçekleştir, örneğin veriyi bir state'e set et
  //     setData(response.data);
  
  //     console.log("Veri çekme başarılı:", response.data);
  //   } catch (error) {
  //     console.error("Veri çekme hatası:", error);
  
  //     // Hata durumunda da diğer işlemleri gerçekleştir, örneğin state'i sıfırla
  //     setData();
  //   }
  // };
  
  // fetchData fonksiyonunu çağır
  // fetchData();
  


  return (
    <div className="accountForm">
      <form>
        <h5 className="text-center mb-3">Hesap Bilgilerim</h5>

        <div className="row name-surname">
          <div className="col-md-6">
            <label htmlFor="nameInput" className="form-label">
              Ad Soyad
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
              Katılım Tarihi
            </label>
              <input
               value={date}
               type="number"
               disabled
               className="form-control"
               id="surnameInput"
               />
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
              <PhoneInput
                inputProps={{
                  name: "phoneInput",
                  required: true,
                }}
                country={"tr"} // Türkiye için
                value={phone}
                onChange={(value) => handleInputChange({ target: { id: "phoneInput", value } })}
              />
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
              <button type="button" className="AccountSave btn" onClick={handleSaveClick}>
                Kaydet
              </button>
            </div>
          </div>
        ) : (
          <div className="row AccountButton">
            <div className="col-md-4">
              <button type="button" className="AccountEdit btn" onClick={handleEditClick}>
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
