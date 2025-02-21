
import React from "react";
import './Header.css'
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';


const Header = () => {
    return (
        <div className="header">

            <div className="logo">

                <img src="/images/myntra.jpg" alt="logo" />

            </div>

            <div className="nav-menu">

                <ul>
                    <li><a href="men">Men</a></li>
                    <li><a href="women">Women</a></li>
                    <li><a href="kids">Kids</a></li>
                    <li><a href="home&living">Home & Living</a></li>
                    <li><a href="beauty">Beauty</a></li>
                    <li><a href="studio">Studio</a></li>
                </ul>

            </div>

            <div className="search-bar">
                <FaSearch />
                <input type="text" placeholder="Search for Products, Brands and more" />
            </div>

            <div className="user-options">
                <ul>
                    <li><FaUser /><a href="profile">Profile</a></li>
                    <li><FaHeart /><a href="wishlist">Wishlist</a></li>
                    <li><FaShoppingBag /><a href="bag">Bag</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
