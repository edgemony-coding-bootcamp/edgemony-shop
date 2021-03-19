import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import HeaderCart from "./HeaderCart";
import "./Header.css";

function Header({ logo, title, cartTotal, cartSize, showCart }) {
  return (
    <header className="Header">
      <Link to="/">
        <img src={logo} alt={title} />
      </Link>
      {showCart ? (
        <HeaderCart
          cartTotal={cartTotal}
          cartSize={cartSize}
          showCart={showCart}
        />
      ) : null}
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
  showCart: PropTypes.bool.isRequired,
};

export default Header;
