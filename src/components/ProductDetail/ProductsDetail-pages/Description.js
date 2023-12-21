import React, { useState } from "react";
import { useSelector } from "react-redux";
import Location from "./ProductLocation"

function Description() {
  const [activeTab, setActiveTab] = useState('description'); // Varsayılan aktif sekme

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  return (
    <div className="card text-center " style={{
      border: "1px solid gray",
      minHeight: "250px",
      marginTop:"200px"
    }}>
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a href="#/"
              className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => handleTabClick('description')}
            >
              Açıklama
            </a>
          </li>
          <li className="nav-item">
            <a href="#/"
              className={`nav-link ${activeTab === 'location' ? 'active' : ''}`}
              onClick={() => handleTabClick('location')}
            >
              Konumu
            </a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        {activeTab === 'description' && (
          <h5 className="card-title">{selectedProduct.description}</h5>
        )}
        {activeTab === 'location' && (
         <Location/>

        )}
      </div>
    </div>
  );
}

export default Description;
