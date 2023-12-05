import React, { useState } from 'react';
import Bilgiler from './HesapBilgiler';
import UrunBilgileri from './HesapUrunBilgileri';
import HesapSidebar from './HesapMenu';
import Navbar from './Navbar';
import Footer from './Footer';

function Hesap() {
  const [selectedPage, setSelectedPage] = useState('Bilgiler');

  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  return (
    <>
      <Navbar />
      <div className="Hesap">
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <HesapSidebar onSelectPage={handleSelectPage} />
            </div>
            <div className='col-md-8'>
              {selectedPage === 'Bilgiler' && <Bilgiler />}
              {selectedPage === 'Urun' && <UrunBilgileri />}
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}

export default Hesap;
