import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import "../Styles/SignIn.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../images/logo.png";  
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Şifreler eşleşmiyor!');
      return;
    }


    dispatch(
      addUser({
        id: nanoid(),
        name,
        email,
        password,
        address,
        phoneNumber,
      })
    );

  
    navigate('/');

 
  };

  const handleCancel = () => {
   
    navigate('/');
  };

  return (
    <>
    <Navbar />
    <div>
      
      
      <form onSubmit={handleSubmit} className='x'>
      <h1>Kayıt Ol</h1>
      <div className="row">
              <div className="logo col-md-6">
                <div className="image">
                  <img src={Logo} alt="Logo" />
                </div>
                </div>
      </div> 
        <div>
          <label htmlFor="name">Ad Soyad:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div>
          <label htmlFor="email">E-posta:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div>
          <label htmlFor="password">Şifre:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <div>
          <label htmlFor="confirmPassword">Şifre Tekrarı:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="address">Adres:</label>
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>

        <div>
          <label htmlFor="phoneNumber">Telefon Numarası:</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>

        <div>
          <button type="submit">Kayıt Ol</button>
          <button type="button" onClick={handleCancel}>
            İptal
          </button>
        </div>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default SignUp;
