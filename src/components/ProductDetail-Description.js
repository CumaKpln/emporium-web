import React, { useState } from "react";
import { useSelector } from "react-redux";




function Content() {
  const [activeTab, setActiveTab] = useState("adDetails");
  const selectedProduct = useSelector((state) => state.selectedProduct);


  return (
    <div className="contents mb-5">

      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "adDetails" ? "active" : ""
                  }`}
                onClick={() => setActiveTab("adDetails")}
                href="#!"
              >
                İlan Detayları
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "location" ? "active" : ""}`}
                onClick={() => setActiveTab("location")}
                href="#!"
              >
                Konumu
              </a>
            </li>
          </ul>
        </div>

        <div className="card-body">
          {activeTab === "adDetails" && (
            <>
              <p className="card-text">
                {selectedProduct.description}
              </p>
            </>
          )}
          {activeTab === "location" && (
            <>
              <p className="card-text"> {selectedProduct.location}</p>
            </>
          )}
        </div>
           
      </div>
    </div>
  );
}


export default Content;
