import React, { useState } from "react";
import Logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/Pages/SignIn.css";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function SignIn() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Eksik veri kontrolü için validasyon hatalarını saklayacağımız obje
    const validationErrors = {};

    // Form verilerini kontrol et
    for (const key in formData) {
      if (formData[key].trim() === "") {
        validationErrors[key] = "Bu alan boş bırakılamaz";
      }
    }

    // E-posta ve telefon için regex kontrolleri
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Geçerli bir e-posta adresi girin";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      validationErrors.phoneNumber =
        "Geçerli bir telefon numarası girin (10 haneli, sadece rakam)";
    }

    // Hataları set et
    setErrors(validationErrors);

    // Eğer hata yoksa, form verilerini gönder
    if (Object.keys(validationErrors).length === 0) {
      const username = `${formData.firstName} ${formData.lastName}`;
      const dataToSend = { ...formData, username };

      axios
        .post("YOUR_URL", dataToSend)
        .then((response) => {
          console.log("İstek başarılı. Yanıt:", response.data);
          // Form verilerini temizle
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
          });
        })
        .catch((error) => {
          console.error("İstek hatası:", error);
          // Hata durumunda hata mesajını burada işleyebilirsiniz
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-login mt-5">
        <div className="SignIn">
          <form onSubmit={handleSubmit} className="formx" id="form-signin">
            <h1 className="mt-5">Kayıt Ol</h1>
            <div className="row">
              <div className="logo col-md-6">
                <div className="imagex">
                  <img src={Logo} alt="Logo" />
                </div>
              </div>
              <div className="logo col-md-6">
                <label>
                  Ad:
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <span className="error">{errors.firstName}</span>
                  )}
                </label>

                <label>
                  Soyad:
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <span className="error">{errors.lastName}</span>
                  )}
                </label>

                <label>
                  E-posta:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </label>
                <div className="d-dlex ">
                  <label htmlFor="phoneNumber">Telefon Numarası</label>
                  <PhoneInput
                    country={"tr"}
                    name="phoneNumber"
                    value={formData.phoneNumber}
                  />

                  {errors.phoneNumber && (
                    <span className="error">{errors.phoneNumber}</span>
                  )}
                </div>

                <label>
                  Şifre:
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </label>

                <label>
                  Şifre Tekrar:
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <span className="error">{errors.confirmPassword}</span>
                  )}
                </label>
              </div>
            </div>
            <button type="submit" className="btn mb-2" id="Signin">
              Kayıt Ol
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
