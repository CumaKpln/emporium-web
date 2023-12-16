
import "../Styles/SignIn.css"
import Logo from '../images/logo.png'
import React, { useState } from 'react'

import alertify from "alertifyjs"
import validations from '../validation/index';

import { useDispatch } from "react-redux"
import { addUser, currentUserIndex } from '../control/slices/userSlice'
import { useSelector } from "react-redux"

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { nanoid } from "nanoid";

import { useNavigate } from 'react-router-dom';

function SignIn() {

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVerification, setPasswordVerification] = useState("")

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isVisible, setIsVisible] = useState(false)
    const [isVerificationVisible, setIsVerificationVisible] = useState(false)


    const dispatch = useDispatch()
    // const currentUser = dispatch(getCurrentUser())
    const index = useSelector((state) => state.user.currentUserIndex);
    const users = useSelector((state) => state.user.users);
    const currentUser = users[index]


    const handleSubmit = (e) => {
        e.preventDefault()
        // Calculate the number of valid fields based on the absence of errors
        const validFieldsCount = Object.keys(errors).filter(fieldName => !errors[fieldName]).length;


        // Tüm alanlar geçerliyse
        if (validFieldsCount === 6) {

            dispatch(addUser({
                name: name,
                userName: userName,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
                address: address,
                id: nanoid(),
            }))

            console.log("Kullanıcı bilgileri:", currentUser, users);

            // Başarılı mesajını göster
            alertify.success("Kullanıcı başarıyla kaydedildi.");

            navigate("/");

        } else {
            alertify.error("İlgili alanları uygun bir şekilde doldurunuz.");
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
      <div>
        <form onSubmit={handleSubmit} className='formx'>
          <h1>Kayıt Ol</h1>
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

          <button type="submit">Kayıt Ol</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
