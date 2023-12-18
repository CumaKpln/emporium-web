import React, { useState } from 'react';
import Logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/SignIn.css";

function SignIn(){
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
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

    // Doğrulama işlemleri
    const validationErrors = {};

    // Ad, Soyad, Adres, E-posta, Telefon Numarası, Şifre kontrolü
    for (const key in formData) {
      if (formData.hasOwnProperty(key) && formData[key].trim() === '') {
        validationErrors[key] = 'Bu alan boş bırakılamaz';
      }
    }

    // E-posta format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      validationErrors.email = 'Geçerli bir e-posta adresi girin';
    }

    setErrors(validationErrors);

    // Hata yoksa formu işle
    if (Object.keys(validationErrors).length === 0) {
      // Burada form verilerini işleyebilirsiniz, örneğin bir API'ye göndermek gibi.
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-login mt-5">
        <div className='SignIn'>
         
        <form onSubmit={handleSubmit} className='formx' id='form-signin'>
        <h1  className="mt-5">Kayıt Ol</h1>
          <div className="row">
            <div className="logo col-md-6">
              <div className="imagex">
                <img src={Logo} alt="Logo" />
              </div>
            </div>
          </div>
          <label>
            Ad:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </label>

          <label>
            Soyad:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </label>

          <label>
            Adres:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </label>

          <label>
            E-posta:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <label>
            Telefon Numarası:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </label>

          <label>
            Şifre:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </label>

          <label>
            Şifre Tekrar:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </label>

          <button type="submit" className="btn mb-2" id="Signin">Kayıt Ol</button>
        </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
