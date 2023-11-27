import React from "react";
import logo from "../images/logo.png";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";

let nameFilter = "";

function FilterByName({ name }) {
  if (nameFilter === null || nameFilter === "") return true;
  else return name.contains(nameFilter);
}

const Navbar = () => {
  return (
    <>
      <nav className="navbar" id="nav">
        <div className="container">
          <div className="left-navbar">
            <Link to="/">
              {" "}
              <div className="nav-logo">
                <img src={logo} alt="logo-png" />
              </div>
            </Link>

            <div className="nav-search">
              <input
                type="search"
                placeholder="Arama yapınız"
                onInput={(event) => {
                  nameFilter = event.target.value;
                  console.log(nameFilter);
                }}
              />
              <div className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="right-navbar">
            {" "}
            <Link to="/hesabım">
              <div id="account">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                <h6> Hesap </h6>
                {/* buraya kullanıcı username gelecek */}
              </div>
            </Link>
            <Link to="/UrunDetay">
              <div className="fav-icon">
               silinecek
              </div>
            </Link>
            {/*------------------------------------------------------------------------ */}
            <Link to="/Favorits">
              <div className="fav-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
            </Link>
            {/*------------------------------------------------------------------------ */}
            <Link to="/ilan-ver">
              {" "}
              <button type="button">
                <span>İlan ver</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <nav id="nav2" className="navbar bg-body-tertiary">
        <div className="container">
          <div className="nav-logo">
            <img src={logo} alt="logo-png" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <Link to="/">
              {" "}
              <div className="nav-logo">
                <img src={logo} alt="logo-png" />
              </div>
            </Link>
            <div className="offcanvas-body">
              <div className="nav-search">
                <input type="search" placeholder="Arama yapınız" />
                <div className="search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="right-navbar">
              <Link to="/hesabım">
                <div className="account">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                  <div className="hesap"> Hesap </div>
                  {/* buraya kullanıcı username gelecek */}
                </div>
              </Link>
              <div className="fav-icon">
                <a
                  href="/#"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    display: "flex",
                    gap: "25px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <div className="fav">
                    {" "}
                    <span>Favoriler</span>{" "}
                  </div>
                </a>
              </div>
              <div className="cat">
                <a href="#/">
                  {" "}
                  <span>Kategoriler</span>
                </a>{" "}
              </div>
              <Link to="/ilan-ver">
                {" "}
                <button type="button">
                  <span>İlan ver</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
