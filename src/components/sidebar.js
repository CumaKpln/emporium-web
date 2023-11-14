import React from "react";
import "../Styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ height: "60vh" }}>
      <h2>Kategoriler</h2>
      <div className="categories">
        <button type="button">Vasıta</button>
        <button type="button">Emlak</button>
        <button type="button">Eşya</button>
      </div>
    </div>
  );
};

export default Sidebar;
