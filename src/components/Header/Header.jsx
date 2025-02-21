
import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/amazon.webp" alt="Amazon Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button className="btn">Search</button>
      </div>
      <nav className="nav-links">
        <a href="/home">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
};

export default Header;
