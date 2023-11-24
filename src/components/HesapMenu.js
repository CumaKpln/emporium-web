import React from 'react';
import "../Styles/HesapMenu.css";

function MyMenu({ onSelectPage }) {
  return (
    <div className="menu">
      <div className="butons d-flex flex-column align-items-center">
        <div className="col-md-4 mb-3">
          <button type="button" className="btn MenuHesap" onClick={() => onSelectPage('Bilgiler')}>
            Hesap Bilgilerim
          </button>
        </div>
        <div className="col-md-4">
          <button type="button" className="btn urun" onClick={() => onSelectPage('Urun')}>
            Ürün Bilgilerim
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyMenu;
