import PropTypes from "prop-types";
import "./Header.css";
import { useState, useEffect } from "react";

function Header({ logo, cart }) {
  
  function calcTotalPrice() {
    let total = 0;
    cart.map((product) => (total += product.price));
    return total;
  }

  return (
    <header className="Header">
      <img src={logo} alt={logo} />
      <span id="totalPrice">Total Price: € {calcTotalPrice().toFixed(2)}</span>
      <button>
        <i id="icon-cart" class="fa fa-shopping-cart"></i>
        <span id="numItemsCart">{cart.length}</span>
      </button>
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
