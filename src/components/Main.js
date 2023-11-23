import React from "react";
import Article from "./Article";
import Sidebar from "./sidebar";
const Main = () => {
  return (
    <>
    
      <div className="main ">
        <div className="container d-flex">
         
            <div className="col-md-3 col-sm-3 sidebar">
              <Sidebar />
            </div>
            <div className="col-md-9 col-sm-9">
              <Article />
            </div>
            </div>
         
      </div>
    </>
  );
};

export default Main;
