import React, { useState } from "react";
import "../Styles/UrunDetay-Cards.css";
import { useSelector } from "react-redux";



 
function Content() {
  const [activeTab, setActiveTab] = useState("adDetails");
  const selectedProduct = useSelector((state) => state.selectedProduct);


  return (
    <div className="contents mb-5">
      {selectedProduct &&
        Array.isArray(selectedProduct) &&
        selectedProduct.length > 0 &&
        selectedProduct.map((product, id) => (
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

            {data["ilan-ver"].map((product, id) => (
              <div key={id} className="card-body">
                {activeTab === "adDetails" && (
                  <>
                    <p className="card-text">
                      {product.description}
                    </p>
                  </>
                )}
                {activeTab === "location" && (
                  <>
                    <p className="card-text"> {product.location}</p>
                  </>
                )}
              </div>
            ))};
          </div>
        ))}
    </div>
  );
}


export default Content;
