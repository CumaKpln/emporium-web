import React, { useState } from 'react';
import İnformation from './Accountİnfo';
// import MyProducts from './MyProducts';
import AccountSidebar from './AccountMenu';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Account() {
  const [selectedPage, setSelectedPage] = useState('information');

  const handleSelectPage = (page) => { 
    setSelectedPage(page);
  };

  return (
    <>
      <Navbar />
      <div className="Account">
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <AccountSidebar onSelectPage={handleSelectPage} />
            </div>
            <div className='col-md-8'>
              {selectedPage === 'information' && <İnformation />}
              {/* {selectedPage === 'product' && <MyProducts />} */}
            </div>
          </div>
        </div>
      </div>

          <div className="Account2">
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <AccountSidebar onSelectPage={handleSelectPage} />
          </div>
          <div className='col-md-12'>
            {selectedPage === 'information' && <İnformation />}
            {/* {selectedPage === 'product' && <MyProducts />} */}
          </div>
        </div>
      </div>
    </div> 
      <Footer />
    </>
  );
}

export default Account;
