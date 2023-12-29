import React, { useState } from "react";
import "../Styles/Pages/LogIn.css";
import { useDispatch } from "react-redux";
import { logIn } from "../control/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import toast from "react-hot-toast";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    axios

      .post("http://localhost:3000/user/login", userData)

      .then((response) => {
        dispatch(
          logIn({
            email: email,
            password: password,
          })
        );
        toast.success("Giriş başarıyla yapıldı!");

        const token = response.data.token;

        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch((error) => {
        toast.error("Giriş başarısız oldu.");
        console.error("İstek hatası:", error);
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      });
  };

  const handleNavigate = () => {
    navigate("/register");
  };

  const handleMessage = () => {
    navigate("/sifremiunuttum");
  };

  return (
    <>
      <Navbar />
      <div className="container-login mt-5">
        <div className="LogIn">
          <h1 className="mt-5">Üye Girişi</h1>
          <h1 className="mt-5">Üye Girişi</h1>
          <form onSubmit={(e) => handleSubmit(e)} id="form-login">
            <div className="row">
              <div className="logo col-md-6">
                <div className="loginİmage">
                  <img src={Logo} alt="Logo" />
                </div>
              </div>
              <div className="form col-md-6">
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
                  <button type="submit">
                    <p className="mb-0">Giriş</p>
                  </button>
                </div>
                <div className="Link-account ">
                  <Link to={"/register"} onClick={handleNavigate}>
                    Hesabın yok mu?
                    <span>
                      {" "}
                      <b style={{ textDecoration: "underline" }}>
                        {" "}
                        Hesap Oluştur?
                      </b>
                    </span>
                  </Link>
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
