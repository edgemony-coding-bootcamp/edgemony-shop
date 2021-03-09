import PropTypes from "prop-types";

import "./HeaderCart.css";

function HeaderCart({ cartTotal, cartSize, products, onCartClick }) {
  return (
    <div className="HeaderCart">
      {!!cartSize && <span className="price">{cartTotal}</span>}
      <span className="icon" onClick={onCartClick}>
        <i className="fas fa-shopping-cart"></i>
        {!!cartSize && <span className="qty">{cartSize}</span>}
      </span>
    </div>
  );
}

HeaderCart.propTypes = {
  products: PropTypes.array.isRequired,
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired,
};

export default HeaderCart;
