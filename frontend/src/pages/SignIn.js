import React, { useState } from "react";
import Logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/Pages/SignIn.css";
import axios from "axios";
import toast from "react-hot-toast";

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
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
      const dataToSend = { ...formData };

      axios
        .post("http://localhost:3000/user/register", dataToSend)
        .then((response) => {
          toast.success("Kayıt başarıyla yapıldı!");

          console.log("İstek başarılı. Yanıt:", response.data);
          // Form verilerini temizle
          setFormData({
            username: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
          });
        })
        .catch((error) => {
          toast.error("Kayıt başarısız oldu!");

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
              <div className="logo col-md-6 ">
                <div>
                  <label>
                    Kullanıcı adı soyadı: </label>
                    <input
                      className="signIn-inputs"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    {errors.username && (
                      <span className="error">{errors.username}</span>
                    )}
                 
                </div>

                <div>
                  <label> E-posta: </label>

                  <input
                    className="signIn-inputs"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="d-dlex ">
                  <label>Telefon Numarası: </label>
                  <input
                    className="signIn-inputs"
                    placeholder="(242) 242 24 24"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && (
                    <span className="error">{errors.phoneNumber}</span>
                  )}
                </div>

                <div>
                  <label>Şifre: </label>
                  <input
                    className="signIn-inputs"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>

                <div className="mb-4">
                  {" "}
                  <label>Şifre Tekrar:</label>
                  <input
                    className="signIn-inputs"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <span className="error">{errors.confirmPassword}</span>
                  )}
                </div>
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
