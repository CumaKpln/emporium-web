import React, { useState } from "react";
import axios from "axios";
import Logo from "../images/logo.png";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";

const PasswordChange = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const resetToken = localStorage.getItem('resetToken');

  const handlePasswordChange = (e) => {
    e.preventDefault();

    // Şifreleri kontrol et
    if (newPassword !== newPassword2) {
      toast.error("Şifreler uyuşmuyor.");
      return;
    }
    
    // Şifre değiştirme isteği gönder
    axios
      .post(`http://localhost:3000/reset-password/${resetToken}`, {
        newPassword: newPassword,
        newPassword2: newPassword2,
      })
      .then((response) => {
        // Şifre değiştirme başarılı olduysa
        toast.success("Şifre başarıyla değiştirildi.");

        setNewPassword("");
        setNewPassword2("");
      })
      .catch((error) => {
        console.error("İstek hatası:", error);
        // Hata durumunda kullanıcıya hata mesajı gösterilebilir
        toast.error("Şifre değiştirme başarısız oldu.");
      });
  };

  return (
    <>
    <Toaster/>
      <Navbar />
      <div className="form-container m-auto mt-5">
        <h2>Şifre Değiştirme</h2>

        <form className="form" onSubmit={handlePasswordChange}>
          <div className="image ml-3 mb-5">
            <img
              src={Logo}
              alt="Logo"
              style={{
                margin: "0px",
                marginLeft: "55px",
              }}
            />
          </div>
          <label>
            Yeni şifre Giriniz:
            <input
              className="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} 
            />
          </label>
          <label className="mt-3">
            Yeni şifreyi Tekrar Giriniz:
            <input
              className="newPassword"
              type="password"
              value={newPassword2}
              onChange={(e) => setNewPassword2(e.target.value)} 
            />
          </label>
          <button className="ForgotPasswordBtn mt-5" type="submit">
            Şifreyi Değiştir
          </button>
        </form>
      </div>
    </>
  );
};

export default PasswordChange;
