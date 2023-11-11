import React from "react";
import Article from "./Article";
import Aside from "./Aside";

const Main = () => {
  return (
    <>
      <div className="main">
          <div className="d-flex">
            <div className="col-md-3">
              <Aside />
            </div>
            <div className="col-md-9">
              <Article />
            </div>

          </div>
        
      </div>
    </>
  );
};

export default Main;
