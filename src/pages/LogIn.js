import React, { useState } from "react";
import "../Styles/LogIn.css";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../images/logo.png'

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
    <div className="LogIn">
      <h1 className="mt-5">Üye Girişi</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
          <div className="row">
            <div className="logo col-md-6">
              <div className="image" style={{ width: "50%" }}>
                <img src={Logo} alt="Logo" style={{ width: "50%" }} />
              </div>
            </div>
            <div className="form col-md-6">
              {" "}
              <div className="e-posta g-3">
                <label className="Item">E-Posta</label>
                <br></br>
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
                <br></br>
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
            </div>
          </div>
        </div>

        <div className="col-md-3 mx-auto">
          <div className="btn">
            <Link to="giris">
              <button
                type="submit"
                className="giris "
                id="giris"
                onClick={handleSubmit}
              >
                {" "}
                Giriş{" "}
              </button>
            </Link>
          </div>
          <br></br>
          <a href="sifremiunuttum" onClick={handleMessage}>
            şifremi unuttum
          </a>
          <br></br> <br></br>
          <a href="hesabimyok" onClick={handleNavigate}>
            Hesabım yok
          </a>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
