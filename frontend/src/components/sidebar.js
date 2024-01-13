import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/sidebar.css";

const SidebarCategory = ({ title, isOpen, onToggle, children }) => (
  <div>
    <p className="sideberTitle"  onClick={onToggle}>{title}</p>
    {isOpen && <div>{children}</div>}
  </div>
);

const SidebarSubCategory = ({ title, selected, onToggle }) => (
  <label className="sidebarLabel">
    <input className="sidebarInput" type="checkbox" checked={selected} onChange={onToggle} />
    {title}
  </label>
);


const Sidebar = () => {
  const [categories, setCategories] = useState({
    vehicle: false,
    subCategories: {
      car: false,
      motorcycle: false,
    },
    realEstate: false,
    subCategoriesRealEstate: {
      home: false,
      plot: false,
    },
    electronicStuff: false,
    subCategoriesElectronicStuff: {
      phone: false,
      pc: false,
    },
  });

  const toggleCategory = (category) => {
    setCategories((prevCategories) => {
      const updatedCategories = { ...prevCategories };

      // Tüm alt kategorilerin checkbox'larını sıfırla
      if (
        category === "vehicle" ||
        category === "realEstate" ||
        category === "electronicStuff"
      ) {
        Object.keys(updatedCategories.subCategories).forEach((key) => {
          updatedCategories.subCategories[key] = false;
        });

        Object.keys(updatedCategories.subCategoriesRealEstate).forEach((key) => {
          updatedCategories.subCategoriesRealEstate[key] = false;
        });

        Object.keys(updatedCategories.subCategoriesElectronicStuff).forEach((key) => {
          updatedCategories.subCategoriesElectronicStuff[key] = false;
        });
      }

      // Diğer kategorileri sıfırla
      Object.keys(updatedCategories).forEach((key) => {
        if (
          key !== category &&
          key !== "subCategories" &&
          key !== "subCategoriesRealEstate" &&
          key !== "subCategoriesElectronicStuff"
        ) {
          updatedCategories[key] = false;
        }
      });

      // Seçili kategoriyi toggle et
      updatedCategories[category] = !prevCategories[category];

      return updatedCategories;
    });
  };

  const toggleSubCategory = (category, subCategory) => {
    setCategories((prevCategories) => {
      const updatedCategories = { ...prevCategories };

      // Tüm alt kategorilerin checkbox'larını sıfırla
      Object.keys(updatedCategories[category]).forEach((key) => {
        updatedCategories[category][key] = false;
      });

      // Seçili alt kategoriyi toggle et
      updatedCategories[category][subCategory] = !prevCategories[category][subCategory];

      return updatedCategories;
    });
  };

  return (
    <div className="sidebarMain">
      <SidebarCategory title="Vasıta" isOpen={categories.vehicle} onToggle={() => toggleCategory("vehicle")}>
        <SidebarSubCategory
          title="Araba"
          selected={categories.subCategories.car}
          onToggle={() => toggleSubCategory("subCategories", "car")}
        />
        <SidebarSubCategory
          title="Motorsiklet"
          selected={categories.subCategories.motorcycle}
          onToggle={() => toggleSubCategory("subCategories", "motorcycle")}
        />
      </SidebarCategory>

      <SidebarCategory title="Emlak" isOpen={categories.realEstate} onToggle={() => toggleCategory("realEstate")}>
        <SidebarSubCategory
          title="Ev"
          selected={categories.subCategoriesRealEstate.home}
          onToggle={() => toggleSubCategory("subCategoriesRealEstate", "home")}
        />
        <SidebarSubCategory
          title="Arsa"
          selected={categories.subCategoriesRealEstate.plot}
          onToggle={() => toggleSubCategory("subCategoriesRealEstate", "plot")}
        />
      </SidebarCategory>

      <SidebarCategory title="Elektronik Eşya" isOpen={categories.electronicStuff} onToggle={() => toggleCategory("electronicStuff")}>
        <SidebarSubCategory
          title="Telefon"
          selected={categories.subCategoriesElectronicStuff.phone}
          onToggle={() => toggleSubCategory("subCategoriesElectronicStuff", "phone")}
        />
        <SidebarSubCategory
          title="Bilgisayar"
          selected={categories.subCategoriesElectronicStuff.pc}
          onToggle={() => toggleSubCategory("subCategoriesElectronicStuff", "pc")}
        />
      </SidebarCategory>
    </div>
  );
};

export default Sidebar;


