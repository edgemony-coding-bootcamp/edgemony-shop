import PropTypes from "prop-types";
import "./Header.css";
import { useState, useEffect } from "react";
import HeaderCart from "./HeaderCart"
function Header({ logo, cart, openModal }) {
  
  return (
    <header className="Header">
      <img src={logo} alt={logo} />
      <HeaderCart cart={cart} openModal={openModal}/>
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
