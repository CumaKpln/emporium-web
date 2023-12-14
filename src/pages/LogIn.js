import React, { useState } from "react";
import "../Styles/LogIn.css";
import { useDispatch } from "react-redux";
import { logIn } from "../control/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
  };

  const handleNavigate = () => {
    navigate("/kayıt");
  };

  const handleMessage = () => {
    //alertify.success("Şifre yenilemek için mail gönderildi, lütfen mail kutunuzu kontrol ediniz.")
    navigate("/sifremiunuttum");
  };

  return (
    <>
      <Navbar />
      <div className="container-login mt-5">
        <div className="LogIn">
          <h1 className="mt-5">Üye Girişi</h1>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="logo col-md-6">
                <div className="image">
                  <img src={Logo} alt="Logo" />
                </div>
              </div>
              <div className="form col-md-6">
                {" "}
                <div className="e-mail g-3">
                  <label className="Item">E-Posta</label>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="E-posta"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="password">
                  <label className="Item">Şifre</label>
                  <br />
                  <input
                    type="password"
                    className="password input"
                    name="password"
                    id="password"
                    placeholder="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="Link-password mb-3">
                  <a
                    className="forget-password "
                    href="sifremiunuttum"
                    onClick={handleMessage}
                  >
                    şifreni mi unuttun?
                  </a>
                </div>
                <br />
                <div className="btn mb-2" id="Login">
                  <button onClick={handleSubmit}>
                    <p className="mb-0">Giriş</p>
                  </button>
                </div>
               
                <div className="Link-account ">
                  <a href="hesabimyok" onClick={handleNavigate}>
                    Hesabın yok mu?
                   <span> <b style={{textDecoration:"underline"}}> Hesap Oluştur?</b></span>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LogIn;
