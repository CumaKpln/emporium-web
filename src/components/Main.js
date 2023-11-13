import React from "react";
import Article from "./Article";
import Sidebar from "./sidebar";

const Main = () => {
  return (
    <>
      <div className="main">
          <div className="d-flex">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-10">
              <Article />
            </div>

          </div>
        
      </div>
    </>
  );
};

export default Main;
