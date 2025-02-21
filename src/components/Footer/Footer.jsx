
import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
        <a href="/shipping">Shipping</a>
        <a href="/returns">Returns</a>
      </div>
      <div className="social-media">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
      <p>&copy; 2024 E-Commerce Site</p>
    </footer>
  );
};

export default Footer;
