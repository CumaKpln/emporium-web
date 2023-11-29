import Logo from '../images/logo.png'
import React, { useState } from 'react';



import "../Styles/LogIn.css"
import { useDispatch } from 'react-redux';

import { logIn } from '../redux/userSlice'
import { useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
import alertify from 'alertifyjs';


function LogIn() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

 
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
        logIn({
        email:email,
        password:password,
    }))
    
   
  }

  const handleNavigate = () => {
    navigate("/kayıt")
  }

  const handleMessage = () => {
    //alertify.success("Şifre yenilemek için mail gönderildi, lütfen mail kutunuzu kontrol ediniz.")
    navigate("/sifremiunuttum")
  }

  
      
  return (
    <div>
   
    <br></br><br></br>
    <div className='LogIn'>
        <h1 >Üye Girişi</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            
            <div className='image'>
                <img className='Logo' src={Logo} alt="logo" />
            </div>

            <div className="row g-3" >

                <div className="col-md-6">
                    <label className="Item">E-Posta</label>  
                    <br></br>
                    <input type="email" name="email" placeholder="E-posta" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br></br>
                </div>
                
                <div className="col-md-6">
                    <label className="Item">Şifre</label> 
                     <br></br>
                    <input  type="password" class="password" name="password" id="password"placeholder='Şifre' value={password} onChange={(e)=>setPassword(e.target.value)}/>             
                    <br></br>
                  
                </div>


                <div className="col-md-3 mx-auto">
                  <Link to="giris">
                  <div className='btn'>
                    <button type='submit'className='giris ' id='giris' onClick={handleSubmit}> Giriş </button>
                    </div>
                  </Link>
                    
                     
                     
                        <br></br>

                        <a href="sifremiunuttum"onClick={handleMessage}>şifremi unuttum</a>
                        <br></br>  <br></br> 
                        <a href="hesabimyok" onClick={handleNavigate}>Hesabım yok</a>
                     
                   
                </div>

            </div>

        
        </form>
    </div>
 
</div>
  );
}   

export default LogIn;