import React, { useState } from 'react';
import Logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/Pages/ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Şifre sıfırlama API çağrısını burada yapabilirsiniz.
      // Örneğin, Firebase Authentication kullanıyorsanız:
      // await firebase.auth().sendPasswordResetEmail(email);

      setMessage('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.');
    } catch (error) {
      console.error('Şifre sıfırlama hatası:', error.message);
      setMessage('Şifre sıfırlama işlemi başarısız oldu.');
    }
  };

  return (
    <>
     <Navbar />
    <div className="forgot-password-container">
     
      <div className="form-container">
        <h2>Şifrenizi mi unuttunuz?</h2>

        <form onSubmit={handleFormSubmit}>
           <div className="image">
                  <img src={Logo} alt="Logo" />
            </div>
          <label>
            E-posta adresiniz:
            <input className='ForgotPasswordİnput' type="email" value={email} onChange={handleEmailChange} />
          </label>
          <button className='ForgotPasswordBtn' type="submit">Şifre Sıfırlama Bağlantısı Gönder</button>
        </form>
        <p className="message">{message}</p>
      </div>
     
    </div>
    <Footer />
      </>
  );
};

export default ForgotPassword;
