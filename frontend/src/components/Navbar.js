import React from "react";
import logo from "../images/logo.png";
import "../Styles/navbar.css";
import { Link  } from "react-router-dom";
// import filter from "./FilterPage/Filtering";
import { useSearch } from './Context/SearchContext';
// import { useSelector } from "react-redux";

const Navbar = () => {

  const token = localStorage.getItem('userToken');

  const { updateNameFilter } = useSearch();


  const handleLogOut = () => {
    localStorage.removeItem('token');
  }


  // const selectedProduct = useSelector(
  //   (state) => state.products.selectedProduct
  // );

  // const userData = useSelector(
  //   (state) => state.userİnfo
  // );
  // // console.log(userData)

  // Hesap ismi
  // const atIndex = email.indexOf("@");
  // const username = atIndex !== -1 ? email.slice(0, atIndex) : email;
  return (
    <>
      <nav className="navbar" id="nav">
        <div className="container">
          <div className="left-navbar">
            <Link to="/">
              <div className="nav-logo">
                <img src={logo} alt="logo-png" />
              </div>
            </Link>

            <div className="nav-search">
              <input
                className="searchInput"
                type="search"
                placeholder="Arama yapınız"
                onInput={(event) => {
                  updateNameFilter(event.target.value);
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
          <div className="right-navbar ml-5">
            {token ? (
              <>
                <div id="account">
                  <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg
                        style={{ marginRight: "10px" }}
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
                      </svg>   Hesap
                    </button>
                    <ul className="dropdown-menu text-center">
                      <li><a className="dropdown-item" href="/account">Hesabım</a></li>
                     <li><a id="logout"  href="/login" onClick={handleLogOut} className="dropdown-item">Çıkış Yap</a></li> 
                     

                    </ul>
                  </div>
                </div>
                <div className="btn fav-icon p-2 mt-2">
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
                  <span>Favoriler</span>
                </div>
                <Link to="/upload-product">
                  <div id="uploadProduct" className="navBtn btn" type="button">
                    <span className="m-0">İlan ver</span>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <div className="Login navBtn ">
                    <span className="m-0">Üye Giriş</span>
                  </div>
                </Link>
                <Link to="/register ">
                  <div className=" navBtn">
                    <span className="m-0">Kayıt ol</span>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <nav id="nav2" className="navbar bg-body-tertiary">
        <div className="container nav2-container">
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
            {token ? (
              <>
                <Link to="/account">
                  <div className="nav2-account  ">
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
                    <div> Hesap </div>
                    {/* buraya kullanıcı username gelecek */}
                  </div>
                </Link>
                <div className="nav2-fav-icon">
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
                <Link to="/upload-product">
                  <div className="nav2-upload-product">
                    <span>İlan ver</span>
                  </div>
                </Link>
              </>

            ) : (
              <>
                <Link to="/login">
                  <div className="nav2-Login">
                    <span className="m-0 ">Üye Giriş</span>
                  </div>
                </Link>
                <Link to="/register ">
                  <div className="nav2-Register ">
                    <span className="m-0">Kayıt ol</span>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
