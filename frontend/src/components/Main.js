import React from "react";
import Article from "./Article";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CategoryProvider } from "./CategoryContext";
import { SearchProvider, useSearch } from './SearchContext';
import { ProvinceProvider } from "./ProvinceContext";

const Main = () => {
  const { nameFilter } = useSearch();

  return (
    <>
      <SearchProvider>
        <Navbar />
        <div className="main ">
          <div className="container d-flex">
            <CategoryProvider>
              <ProvinceProvider>
                <div className="col-md-3 col-sm-3 sidebar">
                  <Sidebar />
                </div>
                <div className="col-md-9 col-sm-9">
                  {/* Article bileşenini kaldırdık, yerine Products bileşenini ekledik */}
                  <Article nameFilter={nameFilter} />
                  {/* <FilterBar category="asd" /> */}
                </div>
              </ProvinceProvider>
            </CategoryProvider>
          </div>
        </div>
      </SearchProvider>
      <Footer />
    </>
  );
};

export default Main;
