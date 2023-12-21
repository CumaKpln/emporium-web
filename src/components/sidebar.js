import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/sidebar.css";

const Sidebar = () => {
  // vasıta bölümü
  const [isVehicleOpen, setVehicleOpen] = useState(false);
  // Araba için olan filtreleme bölümleri
  const [isCarOpen, setCarOpen] = useState(false);
  const [isCarProvinceOpen, setCarProvinceOpen] = useState(false);
  const [isCarDistrictOpen, setCarDistrictOpen] = useState(false);
  const [isCarBrandOpen, setCarBrandOpen] = useState(false);
  const [isCarSeriesOpen, setCarSeriesOpen] = useState(false);
  const [isCarColorOpen, setCarColorOpen] = useState(false);
  const [isCarGearOpen, setCarGearOpen] = useState(false);
  // Motor için olan filtreleme bölümleri
  const [isMotorcycleOpen, setMotorcycleOpen] = useState(false);
  const [isMotorcycleProvinceOpen, setMotorcycleProvinceOpen] = useState(false);
  const [isMotorcycleDistrictOpen, setMotorcycleDistrictOpen] = useState(false);
  const [isMotorcycleBrandOpen, setMotorcycleBrandOpen] = useState(false);
  const [isMotorcycleSeriesOpen, setMotorcycleSeriesOpen] = useState(false);
  const [isMotorcycleColorOpen, setMotorcycleColorOpen] = useState(false);
  const [isMotorcycleGearOpen, setMotorcycleGearOpen] = useState(false);

  // Emlak Bölümü
  const [isRealEstateOpen, setRealEstateOpen] = useState(false);
  // Ev
  const [isHomeOpen, setHomeOpen]= useState(false)
  const [isHomeProvinceOpen, setHomeProvinceOpen] = useState(false);
  const [isHomeDistrictOpen, setHomeDistrictOpen] = useState(false);
  const [isHomeM2Open, setHomeM2Open] = useState(false);
  const [isHomeNumberOfRoomsOpen, setHomeNumberOfRoomsOpen] = useState(false);
  // Arsa
  const [isPlotOpen, setPlotOpen]= useState(false)
  const [isPlotProvinceOpen, setPlotProvinceOpen] = useState(false);
  const [isPlotDistrictOpen, setPlotDistrictOpen] = useState(false);
  const [isPlotM2Open, setPlotM2Open] = useState(false);
  // Elektronik eşya bölümü
  const [isElectronicStuffOpen, setElectronicStuffOpen] = useState(false);

  const toggleVehicleDropdown = () => {
    setVehicleOpen(!isVehicleOpen);
    setCarOpen(false);
    setMotorcycleOpen(false);
    setRealEstateOpen(false)
    setHomeOpen(false)
    setPlotOpen(false)
    setElectronicStuffOpen(false)
  };

  const toggleRealEstateDropdown = () => {
    setRealEstateOpen(!isRealEstateOpen);
    setHomeOpen(false)
    setPlotOpen(false)
    setVehicleOpen(false)
    setCarOpen(false);
    setMotorcycleOpen(false);
    setElectronicStuffOpen(false);
  };

  const toggleElectronicStuffDropdown = () => {
    setElectronicStuffOpen(!isElectronicStuffOpen);
    setVehicleOpen(false);
    setCarOpen(false);
    setMotorcycleOpen(false);
    setRealEstateOpen(false);
    setHomeOpen(false);
    setPlotOpen(false);
  };

  // araba bölümü
  const toggleCarDropdown = () => {
    setCarOpen(!isCarOpen);
    setMotorcycleOpen(false);
    setCarProvinceOpen(false);
    setCarDistrictOpen(false);
    setCarBrandOpen(false);
    setCarSeriesOpen(false);
    setCarColorOpen(false);
    setCarGearOpen(false);
  };

  const toggleCarProvinceDropdown = () => {
    setCarProvinceOpen(!isCarProvinceOpen);
    setCarDistrictOpen(false); // İlçe dropdown'u açıldığında diğerini kapat
    setCarBrandOpen(false);
    setCarSeriesOpen(false);
    setCarColorOpen(false);
    setCarGearOpen(false);
  };

  const toggleCarDistrictDropdown = () => {
    setCarDistrictOpen(!isCarDistrictOpen);
    setCarProvinceOpen(false);
    setCarBrandOpen(false);
    setCarSeriesOpen(false);
    setCarColorOpen(false);
    setCarGearOpen(false);
  };

  const toggleCarBrandDropdown = () => {
    setCarBrandOpen(!isCarBrandOpen);
    setCarDistrictOpen(false);
    setCarProvinceOpen(false);
    setCarSeriesOpen(false);
    setCarColorOpen(false);
    setCarGearOpen(false);
  };

  const toggleCarSeriesDropdown = () => {
    setCarSeriesOpen(!isCarSeriesOpen);
    setCarDistrictOpen(false);
    setCarProvinceOpen(false);
    setCarBrandOpen(false);
    setCarColorOpen(false);
    setCarGearOpen(false);
  };

  const toggleCarColorDropdown = () => {
    setCarColorOpen(!isCarColorOpen);
    setCarDistrictOpen(false);
    setCarProvinceOpen(false);
    setCarBrandOpen(false);
    setCarSeriesOpen(false);
    setCarGearOpen(false);
  };

  const toggleCarGearDropdown = () => {
    setCarGearOpen(!isCarGearOpen);
    setCarDistrictOpen(false);
    setCarProvinceOpen(false);
    setCarBrandOpen(false);
    setCarSeriesOpen(false);
    setCarColorOpen(false);
  };

  // motor bölümü
  const toggleMotorcycleDropdown = () => {
    setMotorcycleOpen(!isMotorcycleOpen);
    setCarOpen(false);
    setMotorcycleProvinceOpen(false);
    setMotorcycleDistrictOpen(false);
    setMotorcycleBrandOpen(false);
    setMotorcycleSeriesOpen(false);
    setMotorcycleColorOpen(false);
    setMotorcycleGearOpen(false);
  };
  const toggleMotorcycleProvinceDropdown = () => {
    setMotorcycleProvinceOpen(!isMotorcycleProvinceOpen);
    setMotorcycleDistrictOpen(false); // İlçe dropdown'u açıldığında diğerini kapat
    setMotorcycleBrandOpen(false);
    setMotorcycleSeriesOpen(false);
    setMotorcycleColorOpen(false);
    setMotorcycleGearOpen(false);
  };

  const toggleMotorcycleDistrictDropdown = () => {
    setMotorcycleDistrictOpen(!isMotorcycleDistrictOpen);
    setMotorcycleProvinceOpen(false);
    setMotorcycleBrandOpen(false);
    setMotorcycleSeriesOpen(false);
    setMotorcycleColorOpen(false);
    setMotorcycleGearOpen(false);
  };

  const toggleMotorcycleBrandDropdown = () => {
    setMotorcycleBrandOpen(!isMotorcycleBrandOpen);
    setMotorcycleDistrictOpen(false);
    setMotorcycleProvinceOpen(false);
    setMotorcycleSeriesOpen(false);
    setMotorcycleColorOpen(false);
    setMotorcycleGearOpen(false);
  };

  const toggleMotorcycleSeriesDropdown = () => {
    setMotorcycleSeriesOpen(!isMotorcycleSeriesOpen);
    setMotorcycleDistrictOpen(false);
    setMotorcycleProvinceOpen(false);
    setMotorcycleBrandOpen(false);
    setMotorcycleColorOpen(false);
    setMotorcycleGearOpen(false);
  };

  const toggleMotorcycleColorDropdown = () => {
    setMotorcycleColorOpen(!isMotorcycleColorOpen);
    setMotorcycleDistrictOpen(false);
    setMotorcycleProvinceOpen(false);
    setMotorcycleBrandOpen(false);
    setMotorcycleSeriesOpen(false);
    setMotorcycleGearOpen(false);
  };

  const toggleMotorcycleGearDropdown = () => {
    setMotorcycleGearOpen(!isMotorcycleGearOpen);
    setMotorcycleDistrictOpen(false);
    setMotorcycleProvinceOpen(false);
    setMotorcycleBrandOpen(false);
    setMotorcycleSeriesOpen(false);
    setMotorcycleColorOpen(false);
  };

  //Ev Bölümü
  const toggleHomeDropdown = () => {
    setHomeOpen(!isHomeOpen);
    setPlotOpen(false)
    setHomeDistrictOpen(false);
    setHomeM2Open(false);
    setHomeNumberOfRoomsOpen(false);
    setHomeProvinceOpen(false)
  };

  const toggleHomeProvinceDropdown = () => {
    setHomeProvinceOpen(!isHomeProvinceOpen);
    setHomeDistrictOpen(false);
    setHomeM2Open(false);
    setHomeNumberOfRoomsOpen(false);
  };

  const toggleHomeDistrictDropdown = () => {
    setHomeDistrictOpen(!isHomeDistrictOpen);
    setHomeProvinceOpen(false);
    setHomeM2Open(false);
    setHomeNumberOfRoomsOpen(false);
  };

  const toggleHomeM2Dropdown = () => {
    setHomeM2Open(!isHomeM2Open);
    setHomeProvinceOpen(false);
    setHomeDistrictOpen(false);
    setHomeNumberOfRoomsOpen(false);
  };

  const toggleHomeNumberOfRoomsDropdown = () => {
    setHomeNumberOfRoomsOpen(!isHomeNumberOfRoomsOpen);
    setHomeProvinceOpen(false);
    setHomeDistrictOpen(false);
    setHomeM2Open(false);
  };

  // Arsa Bölümü
  const togglePlotDropdown = () => {
    setPlotOpen(!isPlotOpen);
    setHomeOpen(false)
    setPlotDistrictOpen(false);
    setPlotM2Open(false);
    setPlotProvinceOpen(false)
  };

  const togglePlotProvinceDropdown = () => {
    setPlotProvinceOpen(!isPlotProvinceOpen);
    setPlotDistrictOpen(false);
    setPlotM2Open(false);
  };

  const togglePlotDistrictDropdown = () => {
    setPlotDistrictOpen(!isPlotDistrictOpen);
    setPlotProvinceOpen(false);
    setPlotM2Open(false);
  };

  const togglePlotM2Dropdown = () => {
    setPlotM2Open(!isPlotM2Open);
    setPlotProvinceOpen(false);
    setPlotDistrictOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className="btn sidebarMainTitle dropdown-toggle"
        type="button"
        onClick={toggleVehicleDropdown}
      >
        Vasıta
      </button>
      {isVehicleOpen && (
        <div className="custom-dropdown-menu">
          <button
            className="btn sidebarBtn dropdown-toggle"
            type="button"
            onClick={toggleCarDropdown}
          >
            Araba
          </button>
          {isCarOpen && (
            <div className="custom-dropdown-menu">
              <button
                className="btn sidebarBtn dropdown-toggle"
                type="button"
                onClick={toggleCarProvinceDropdown}
              >
                İl
              </button>
              {isCarProvinceOpen && (
                <div className="custom-dropdown-menu">
                  <button className="btn sidebarBtn" type="button">
                    Model X
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Y
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Z
                  </button>
                </div>
              )}
              <button
                className="btn sidebarBtn dropdown-toggle"
                type="button"
                onClick={toggleCarDistrictDropdown}
              >
                İlçe
              </button>
              {isCarDistrictOpen && (
                <div className="custom-dropdown-menu">
                  <button className="btn sidebarBtn" type="button">
                    Model X
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Y
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Z
                  </button>
                </div>
              )}
              <button
                className="btn sidebarBtn dropdown-toggle"
                type="button"
                onClick={toggleCarBrandDropdown}
              >
                Marka
              </button>
              {isCarBrandOpen && (
                <div className="custom-dropdown-menu">
                  <button className="btn sidebarBtn" type="button">
                    Model X
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Y
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Z
                  </button>
                </div>
              )}
              <button
                className="btn sidebarBtn dropdown-toggle"
                type="button"
                onClick={toggleCarSeriesDropdown}
              >
                Seri
              </button>
              {isCarSeriesOpen && (
                <div className="custom-dropdown-menu">
                  <button className="btn sidebarBtn" type="button">
                    Model X
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Y
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Z
                  </button>
                </div>
              )}
              <button
                className="btn sidebarBtn dropdown-toggle"
                type="button"
                onClick={toggleCarColorDropdown}
              >
                Renk
              </button>
              {isCarColorOpen && (
                <div className="custom-dropdown-menu">
                  <button className="btn sidebarBtn" type="button">
                    Model X
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Y
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Z
                  </button>
                </div>
              )}
              <button
                className="btn sidebarBtn dropdown-toggle"
                type="button"
                onClick={toggleCarGearDropdown}
              >
                Vites
              </button>
              {isCarGearOpen && (
                <div className="custom-dropdown-menu">
                  <button className="btn sidebarBtn" type="button">
                    Model X
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Y
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Z
                  </button>
                </div>
              )}
            </div>
          )}
          <button
            className="btn sidebarBtn dropdown-toggle"
            type="button"
            onClick={toggleMotorcycleDropdown}
          >
            Motor
          </button>
          {isMotorcycleOpen && (
            <div className="custom-dropdown-menu">
              <button
                className="btn sidebarBtn dropdown-toggle"
                type="button"
                onClick={toggleMotorcycleProvinceDropdown}
              >
                İl
              </button>
              {isMotorcycleProvinceOpen && (
                <div className="custom-dropdown-menu">
                  <button className="btn sidebarBtn" type="button">
                    Model X
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Y
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Z
                  </button>
                </div>
              )}
              <button
                className="btn sidebarBtn dropdown-toggle"
                type="button"
                onClick={toggleMotorcycleDistrictDropdown}
              >
                İlçe
              </button>
              {isMotorcycleDistrictOpen && (
                <div className="custom-dropdown-menu">
                  <button className="btn sidebarBtn" type="button">
                    Model X
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Y
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Z
                  </button>
                </div>
              )}
              <button
                className="btn sidebarBtn dropdown-toggle"
                type="button"
                onClick={toggleMotorcycleBrandDropdown}
              >
                Marka
              </button>
              {isMotorcycleBrandOpen && (
                <div className="custom-dropdown-menu">
                  <button className="btn sidebarBtn" type="button">
                    Model X
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Y
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Z
                  </button>
                </div>
              )}
              <button
                className="btn sidebarBtn dropdown-toggle"
                type="button"
                onClick={toggleMotorcycleSeriesDropdown}
              >
                Seri
              </button>
              {isMotorcycleSeriesOpen && (
                <div className="custom-dropdown-menu">
                  <button className="btn sidebarBtn" type="button">
                    Model X
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Y
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Z
                  </button>
                </div>
              )}
              <button
                className="btn sidebarBtn dropdown-toggle"
                type="button"
                onClick={toggleMotorcycleColorDropdown}
              >
                Renk
              </button>
              {isMotorcycleColorOpen && (
                <div className="custom-dropdown-menu">
                  <button className="btn sidebarBtn" type="button">
                    Model X
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Y
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Z
                  </button>
                </div>
              )}
              <button
                className="btn sidebarBtn dropdown-toggle"
                type="button"
                onClick={toggleMotorcycleGearDropdown}
              >
                Vites
              </button>
              {isMotorcycleGearOpen && (
                <div className="custom-dropdown-menu">
                  <button className="btn sidebarBtn" type="button">
                    Model X
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Y
                  </button>
                  <button className="btn sidebarBtn" type="button">
                    Model Z
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <button className="btn sidebarMainTitle dropdown-toggle"
      type="button"
      onClick={toggleRealEstateDropdown}>
        Emlak
      </button>
      {isRealEstateOpen && (
        <div className="custom-dropdown-menu">
        <button
          className="btn sidebarBtn dropdown-toggle"
          type="button"
          onClick={toggleHomeDropdown}
        >
          Ev
        </button>
        {isHomeOpen && (
          <div className="custom-dropdown-menu">
            <button
              className="btn sidebarBtn dropdown-toggle"
              type="button"
              onClick={toggleHomeProvinceDropdown}
            >
              İl
            </button>
            {isHomeProvinceOpen && (
              <div className="custom-dropdown-menu">
                <button className="btn sidebarBtn" type="button">
                  Model X
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Y
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Z
                </button>
              </div>
            )}
            <button
              className="btn sidebarBtn dropdown-toggle"
              type="button"
              onClick={toggleHomeDistrictDropdown}
            >
              İlçe
            </button>
            {isHomeDistrictOpen && (
              <div className="custom-dropdown-menu">
                <button className="btn sidebarBtn" type="button">
                  Model X
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Y
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Z
                </button>
              </div>
            )}
            <button
              className="btn sidebarBtn dropdown-toggle"
              type="button"
              onClick={toggleHomeM2Dropdown}
            >
              M²
            </button>
            {isHomeM2Open && (
              <div className="custom-dropdown-menu">
                <button className="btn sidebarBtn" type="button">
                  Model X
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Y
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Z
                </button>
              </div>
            )}
            <button
              className="btn sidebarBtn dropdown-toggle"
              type="button"
              onClick={toggleHomeNumberOfRoomsDropdown}
            >
              Oda Sayısı
            </button>
            {isHomeNumberOfRoomsOpen && (
              <div className="custom-dropdown-menu">
                <button className="btn sidebarBtn" type="button">
                  Model X
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Y
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Z
                </button>
              </div>
            )}
          </div>
        )}
        <button className="btn sidebarBtn dropdown-toggle"
        type="button"
        onClick={togglePlotDropdown}>
          Arsa
        </button>
        {isPlotOpen && (
          <div className="custom-dropdown-menu">
            <button
              className="btn sidebarBtn dropdown-toggle"
              type="button"
              onClick={togglePlotProvinceDropdown}
            >
              İl
            </button>
            {isPlotProvinceOpen && (
              <div className="custom-dropdown-menu">
                <button className="btn sidebarBtn" type="button">
                  Model X
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Y
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Z
                </button>
              </div>
            )}
            <button
              className="btn sidebarBtn dropdown-toggle"
              type="button"
              onClick={togglePlotDistrictDropdown}
            >
              İlçe
            </button>
            {isPlotDistrictOpen && (
              <div className="custom-dropdown-menu">
                <button className="btn sidebarBtn" type="button">
                  Model X
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Y
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Z
                </button>
              </div>
            )}
            <button
              className="btn sidebarBtn dropdown-toggle"
              type="button"
              onClick={togglePlotM2Dropdown}
            >
              M²
            </button>
            {isPlotM2Open && (
              <div className="custom-dropdown-menu">
                <button className="btn sidebarBtn" type="button">
                  Model X
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Y
                </button>
                <button className="btn sidebarBtn" type="button">
                  Model Z
                </button>
              </div>
            )}
          </div>
        )}
        </div>
      )}
      <button className="btn sidebarMainTitle dropdown-toggle"
      type="button"
      onClick={toggleElectronicStuffDropdown}>
        Elektronik Eşya
      </button>
      {isElectronicStuffOpen &&(
        <button>...</button>
      )}
    </div>
  );
};

export default Sidebar;