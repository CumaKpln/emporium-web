import React, { useState } from 'react';
import "../Styles/AccountMenu.css";

function MyMenu({ onSelectPage }) {
  const [selectedPage, setSelectedPage] = useState('information');

  return (
    <div className="menu">
      <div className="AccountButtons d-flex flex-column align-items-center">
        <div className="col-md-4 mb-3">
          <button
            type="button"
            className={` DetailMenuAccount ${selectedPage === 'information' ? 'selected' : ''}`}
            onClick={() => {
              onSelectPage('information');
              setSelectedPage('information');
            }}
          >
            Hesap Bilgilerim
          </button>
        </div>
        <div className="col-md-4">
          <button
            type="button"
            className={` DetailMenuProduct ${selectedPage === 'product' ? 'selected' : ''}`}
            onClick={() => {
              onSelectPage('product');
              setSelectedPage('product');
            }}
          >
            Ürün Bilgilerim
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyMenu;
