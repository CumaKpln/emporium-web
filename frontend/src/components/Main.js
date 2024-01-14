import React from "react";
import "../Styles/main.css"
import Article from "./Article";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CategoryProvider } from "./Context/CategoryContext";
import { useSearch } from './Context/SearchContext';
const Main = () => {
  const { updateNameFilter } = useSearch();

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="nav-search" id="searchMain">
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
        <div className="container d-flex">
              <CategoryProvider>
                  <div className="col-md-3 col-sm-3 sidebar">
                    <Sidebar />
                  </div>
                  <div className="col-md-9 col-sm-9">
                    <Article />
                  </div>
              </CategoryProvider>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
