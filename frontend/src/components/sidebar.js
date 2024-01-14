// Sidebar.js
import React from "react";
import { useCategory } from "./Context/CategoryContext";

const Sidebar = () => {
  const { handleCategoryClick } = useCategory();

  const handleSidebarClick = (category, subCategory) => {
    handleCategoryClick({ category, subCategory });
  };

  return (
    <div className="sidebarMain">
      <button onClick={() => handleSidebarClick("vehicle", null)}>Araba</button>
      <button onClick={() => handleSidebarClick("vehicle", "car")}>Araba - Car</button>
      <button onClick={() => handleSidebarClick("vehicle", "motorcycle")}>Araba - Motorcycle</button>
      <button onClick={() => handleSidebarClick("realEstate", null)}>Emlak</button>
      <button onClick={() => handleSidebarClick("realEstate", "home")}>Emlak - Ev</button>
      <button onClick={() => handleSidebarClick("realEstate", "plot")}>Emlak - Arsa</button>
      <button onClick={() => handleSidebarClick("electronicStuff", null)}>Elektronik Eşya</button>
      <button onClick={() => handleSidebarClick("electronicStuff", "phone")}>Elektronik Eşya - Telefon</button>
      <button onClick={() => handleSidebarClick("electronicStuff", "pc")}>Elektronik Eşya - PC</button>
    </div>
  );
};

export default Sidebar;
