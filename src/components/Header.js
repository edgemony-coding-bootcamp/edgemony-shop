import PropTypes from "prop-types";

import HeaderCart from "./HeaderCart";
import "./Header.css";

function Header({ logo, title, cartTotal, cartSize, products, onCartClick }) {
  return (
    <header className="Header">
      <img src={logo} alt={title} />
      <HeaderCart
        cartTotal={cartTotal}
        cartSize={cartSize}
        products={products}
        onCartClick={onCartClick}
      />
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
  products: PropTypes.array.isRequired,
  onCartClick: PropTypes.func.isRequired,
};

export default Header;
