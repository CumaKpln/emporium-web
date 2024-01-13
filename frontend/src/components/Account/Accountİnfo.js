import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Edit from "./AccountEditButton";
import "../../Styles/Account/AccountInfo.css";
import axios from "axios";
import AccountDelete from "./AccountDelete";
import { useNavigate } from "react-router-dom";

function İnfo() {
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [setData] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [editMod, setEditMod] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
      case "nameInput":
        setUsername(value);
        break;
      case "surnameInput":
        setCreatedAt(value);
        break;
      case "emailInput":
        setEmail(value);
        break;
      case "phoneInput":
        if (/^\d*$/.test(value) && value.length <= 11) {
          setPhoneNumber(value);
        }
        break;
      default:
        break;
    }
  };

  // const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEditClick = () => {
    setEditMod(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        "https://mysql-emporium-deploy1.onrender.com/user/update",
        {
          username,
          createdAt,
          email,
          phoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEditMod(false);
    } catch (error) {

    }
  };
  

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mysql-emporium-deploy1.onrender.com/user/userInfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data.UserInfo;
      setUsername(data.username);
      setCreatedAt(data.createdAt);
      setEmail(data.email);
      setPhoneNumber(data.phoneNumber);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      // setData("");
      setCreatedAt("");
      setUsername("");
      setEmail("");
      setPhoneNumber("");
    }
  };
  useEffect(() => {

    fetchData();
  }, [token]);

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(
        "https://mysql-emporium-deploy1.onrender.com/user/delete",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/login")
      console.log("Kullanıcı başarıyla silindi:", response.data);
    } catch (error) {
      // Hata durumunda kullanıcıya bilgi verilebilir veya hata işlenebilir
      console.error("Kullanıcı silme hatası:", error);
    }
  };
  return (
    <div className="accountForm">
      <form>
        <h5 className="text-center mb-3">Hesap Bilgilerim</h5>

        <div className="row name-surname">
          <div className="col-md-6">
            <label htmlFor="nameInput" className="form-label">
              Kullanıcı Adı
            </label>
            {editMod ? (
              <Edit
                field="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            ) : (
              <input
                disabled
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Adınızı Giriniz."
                value={username}
              />
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="surnameInput" className="form-label">
              Katılım Tarihi
            </label>
            <input
              value={createdAt.split("T")[0]}
              type="text"
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
              <Edit
                field="email"
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
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
                country={"tr"}
                value={"+90" + phoneNumber}
                onChange={(value) =>
                  handleInputChange({ target: { id: "phoneInput", value } })
                }
              />
            ) : (
              <input
                required
                disabled
                type="text"
                className="form-control"
                id="phoneInput"
                placeholder="Telefon Numaranızı Giriniz."
                value={phoneNumber}
              />
            )}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="row AccountButton justify-content-center">
              <div className="col-md-4 justify-content-end align-items-center">
                {editMod ? (
                  <button
                    type="button"
                    className="AccountSave btn"
                    onClick={handleSaveClick}
                  >
                    Kaydet
                  </button>
                ) : (
                  <button
                    type="button"
                    className="AccountEdit btn"
                    onClick={handleEditClick}
                  >
                    Düzenle
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row AccountButton justify-content-center">
              <div className="col-md-12">
                <AccountDelete onClick={handleDeleteUser} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default İnfo;
