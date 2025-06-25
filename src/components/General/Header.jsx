// src/components/Header.jsx
import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';


const Header = () => {

    const logo = '../../../public/img/booksflea-logo.png'
    const lupa = '../../../public/img/lupa.png'; 
    const userIcon = '../../../public/img/user.png';
    const shoppingBagIcon = '../../../public/img/cart2.png';
    const heartIcon = '../../../public/img/heart5.png';
    const heartIconFull = '../../../public/img/heart3.png' 
    return (
        <header className="main-header">
          

        <Link to="/home" className="header-logo-link"> 
                 <div className="header-logo">
                <img src={logo} alt="Logo" onClick="/home"/>
            </div>
            </Link>

        <div className="search-container">
    <input type="text" placeholder="Título, Autor, año..." className="search-input-fancy"/>
  <button className="search-button-fancy">

    <img src={lupa} alt="Lupa" className="magnifying-glass-icon" />
</button>
</div>
            

            <div className="header-actions">
               <button className="action-button-heart wishlist-button">
                   <img src={heartIcon}className="wishlist-icon-default"></img> 
                      <img src={heartIconFull} className="wishlist-icon-filled"></img>
            </button>
               <button className="action-button">
                    <img src ={userIcon}/></button>
                
                <button className="action-button newheart-button">
                    <img src={shoppingBagIcon}/>
                 
                   </button>
            </div>
        </header>
    );
};

export default Header;