import React, { useState } from "react";
import Logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/Pages/ForgotPassword.css";
import toast, { Toaster } from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // Geçerli bir e-posta girilmediğinde veya e-posta alanı boş bırakıldığında
      toast.error("Lütfen geçerli bir e-posta adresi girin.");
      return; // Mesaj gönderimini engellemek için işlemi burada sonlandırın
    }

    try {
      // E-posta geçerli ise mesaj gönderimi yapabilirsiniz
      toast.success(
        "Şifre sıfırlama bağlantısı e-posta adresinize gönderildi."
      );
    } catch (error) {
      toast.error("Şifre sıfırlama işlemi başarısız oldu.");
    }
  };

  return (
    <>
    <Toaster
    position="bottom-right"
    reverseOrder={false}
    />
      <Navbar />
      <div className="forgot-password-container">
        <div className="form-container">
          <h2>Şifrenizi mi unuttunuz?</h2>

          <form className="form" onSubmit={handleFormSubmit}>
            <div className="image mx-auto">
              <img  src={Logo} alt="Logo" />
            </div>
            <div className="inputs">
             
              <label>E-posta adresiniz: </label>
              <input
                className="ForgotPasswordİnput"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <button className="ForgotPasswordBtn" type="submit">
              Şifre Sıfırlama Bağlantısı Gönder
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
