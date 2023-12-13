import React from "react";
import Article from "./Article";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import FilterBar from "./FilterBar";
const Main = () => {
  return (
    <>
      <Navbar />

      <div className="main ">
        <div className="container d-flex">

          <div className="col-md-3 col-sm-3 sidebar">
            <Sidebar />
          </div>
          <div className="col-md-9 col-sm-9">
            <Article />

            {/* <FilterBar category="car" /> */}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Main;
