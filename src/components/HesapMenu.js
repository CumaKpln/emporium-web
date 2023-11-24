import React, { useState } from 'react';
import "../Styles/HesapMenu.css";

function MyMenu({ onSelectPage }) {
  const [selectedPage, setSelectedPage] = useState('Bilgiler');

  return (
    <div className="menu">
      <div className="butons d-flex flex-column align-items-center">
        <div className="col-md-4 mb-3">
          <button
            type="button"
            className={` MenuHesap ${selectedPage === 'Bilgiler' ? 'selected' : ''}`}
            onClick={() => {
              onSelectPage('Bilgiler');
              setSelectedPage('Bilgiler');
            }}
          >
            Hesap Bilgilerim
          </button>
        </div>
        <div className="col-md-4">
          <button
            type="button"
            className={` MenuUrun ${selectedPage === 'Urun' ? 'selected' : ''}`}
            onClick={() => {
              onSelectPage('Urun');
              setSelectedPage('Urun');
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
