import PropTypes from "prop-types";
import "./Header.css";

import HeaderCart from "./HeaderCart"
function Header({ logo, cart, openModal,totalCart }) {
  
  return (
    <header className="Header">
      <img src={logo} alt={logo} />
      <HeaderCart cart={cart} openModal={openModal} cartTotal={totalCart}/>
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
