import React from "react";
import Article from "./Article";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CategoryProvider } from "./Context/CategoryContext";
import { ProvinceProvider } from "./Context/ProvinceContext";

const Main = () => {

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="container d-flex">
          <CategoryProvider>
            <ProvinceProvider>
              <div className="col-md-3 col-sm-3 sidebar">
                <Sidebar />
              </div>
              <div className="col-md-9 col-sm-9">
                <Article />
                {/* <FilterBar category="asd" />  */}
              </div>
            </ProvinceProvider>
          </CategoryProvider>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
