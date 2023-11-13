import React from "react";
import "../Styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="aside container" style={{ height: "60vh" }}>
      <h2>Kategoriler</h2>
     
      <ul>
        <li>vasıta</li>
        <li>emlak</li>
        <li>konut</li>
      </ul>
    </div>
  );
};

export default Sidebar;
