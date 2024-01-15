import React, { useState } from "react";
import Logo from "../images/logo.png";
import "../Styles/Pages/ForgotPassword.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    try {
      const response = await axios.post(
        "https://mysql-emporium-deploy1.onrender.com/user/forgot-password",
        { email }
      );

      if (response.status === 200) {
        const resetToken = response.data.resetToken;
        localStorage.setItem("resetToken", resetToken);
        toast.success(
          "Şifre sıfırlama bağlantısı e-posta adresinize gönderildi."
        );
      } else {
        toast.error("Şifre sıfırlama işleminde bir hata oluştu.");
      }
    } catch (error) {
      console.error("Şifre sıfırlama işlemi hatası:", error.message);
      toast.error("Şifre sıfırlama işleminde bir hata oluştu.");
    }
  };

  // Checking if resetToken exists before logging
  const resetToken = localStorage.getItem("resetToken");
  if (resetToken) {
    console.log(resetToken);
  }

  return (
    <>
      <Toaster position="center-top" reverseOrder={false} />
      <Navbar />
      <div className="forgot-password-container">
        <div className="form-container">
          <h2>Şifrenizi mi unuttunuz?</h2>

          <form className="form" onSubmit={handleFormSubmit}>
            <div className="image mx-auto">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="inputs">
              <label>E-posta adresiniz:</label>
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
            <p className="text-danger">
              E-posta adresinize bağlantı gönderilecektir. Lütfen geçerli bir
              e-posta adresi yazın.
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
