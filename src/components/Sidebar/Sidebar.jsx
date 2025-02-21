
import React from "react";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Filters</h2>
      <div className="filter-category">
        <h3>Category</h3>
        <ul>
          <li><input type="checkbox" /> Electronics</li>
          <li><input type="checkbox" /> Fashion</li>
          <li><input type="checkbox" /> Furniture</li>
        </ul>
      </div>
      <div className="filter-price">
        <h3>Price Range</h3>
        <input type="range" min="0" max="1000" />
      </div>
    </aside>
  );
};

export default Sidebar;
