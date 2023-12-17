
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

    const handleCancel = (e) => {
        alertify.success("Ana sayfa")
        navigate("/");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Gerekli alanlara uygun şekilde set işlemlerini yapın
        if (name === "name") {
            setName(value);
        } else if (name === "userName") {
            setUserName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "phoneNumber") {
            setPhoneNumber(value);
        } else if (name === "address") {
            setAddress(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "passwordVerification") {
            setPasswordVerification(value);
        }


        setTouched({
            ...touched,
            [name]: true,
        });

        // İlgili alanın doğrulama şemasını al
        const fieldSchema = name === "passwordVerification" ? validations.fields["password"] : validations.fields[name]; ////// !!!! NOT SEND passwordVerification AS FİELD !!!! /////////


        // Alanın değerini doğrula
        fieldSchema.validate(value)
            .then(() => {
                // Doğrulama başarılıysa burada yapılacak işlemler
                // Örneğin, hata durumunu temizle
                setErrors({
                    ...errors,
                    [name]: '',
                });
            })
            .catch(validationErrors => {

                setErrors({
                    ...errors,
                    [name]: validationErrors.message,
                });
            });
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true,
        });
    };

    return (
        <div>

            <div className='SignIn'>

                <h1 >Kayıt Ol</h1>

                <form onSubmit={handleSubmit}>

                    <div className='image' style={{ width: "50%" }}>
                        <img src={Logo} alt="Logo" style={{ width: '50%' }} />
                    </div>

                    <div className="row g-3" >

                        <div className="col-md-6">
                            <label className="Item" htmlFor="name">Ad Soyad</label> <br></br>
                            <input name="name" placeholder="Ad Soyad" value={name} onChange={handleChange} />
                            {errors.name && touched.name && <label className='error'>{errors.name}</label>}
                        </div>

                        <div className="col-md-6">
                            <label className="Item" htmlFor="userName">Kullanıcı Adı</label> <br></br>
                            <input name="userName" placeholder="Kullanıcı Adı" value={userName} onChange={(e) => setUserName(e.target.value)} />
                            {errors.userName && touched.userName && <label className='error'>{errors.userName}</label>}
                        </div>

                        <div className="col-md-6">
                            <label className="Item" htmlFor="email">E-posta</label>  <br></br>
                            <input name="email" placeholder="E-posta" value={email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email && <label className='error'>{errors.email}</label>}
                        </div>

                        <div className="col-md-6">
                            <label className="Item" htmlFor="phoneNumber">Telefon</label> <br></br>
                            <input name="phoneNumber" placeholder="Telefon" value={phoneNumber} onChange={handleChange} />
                            {errors.phoneNumber && touched.phoneNumber && <label className='error'>{errors.phoneNumber}</label>}
                        </div>


                        <div className="col-md-6">
                            <label className="Item">Şifre</label>  <br></br>
                            <input type={isVisible ? "" : "password"} name="password" value={password} onChange={handleChange} />
                            <button className="eyeBtn" type="button" onClick={() => setIsVisible(!isVisible)}>
                                {isVisible ? <VisibilityOffIcon className='eye' /> : <VisibilityIcon className='eye' />}
                            </button>
                            {errors.password && touched.password && <label className='error'>{errors.password}</label>}
                        </div>

                        <div className="col-md-6">
                            <label className="Item" htmlFor="address">Adres</label> <br></br>
                            <textarea name="address" placeholder="Adres" value={address} onChange={handleChange} />
                            {errors.address && touched.address && <label className='error'>{errors.address}</label>}
                        </div>

                        <div className="col-md-6">
                            <label className="Item">Şifre Doğrulama</label>  <br></br>
                            <input type={isVerificationVisible ? "" : "password"} name="passwordVerification" value={passwordVerification} onChange={handleChange} />
                            <button className="eyeBtn" type="button" onClick={() => setIsVerificationVisible(!isVerificationVisible)}>
                                {isVerificationVisible ? <VisibilityOffIcon className='eye' /> : <VisibilityIcon className='eye' />}
                            </button>
                            {touched.passwordVerification && touched.passwordVerification && <label className='error'>{errors.passwordVerification}</label>}
                        </div>


                        <div className='btn'>
                            <button type='submit' className="signInBtn" onClick={handleSubmit}>KAYIT OL</button>

                            <button type="button" className="signInBtn" onClick={handleCancel}>İPTAL</button>
                        </div>


                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignIn