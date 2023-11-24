import React, { useState } from 'react';
import Bilgiler from './HesapBilgiler';
import UrunBilgileri from './HesapUrunBilgileri';
import MyMenu from './HesapMenu';

function Hesap() {
  const [selectedPage, setSelectedPage] = useState('Bilgiler');

  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="Hesap">
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <MyMenu onSelectPage={handleSelectPage} />
          </div>
          <div className='col-md-8'>
            {selectedPage === 'Bilgiler' && <Bilgiler />}
            {selectedPage === 'Urun' && <UrunBilgileri />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hesap;
