import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { formatPrice } from "../services/utils";
import "./HeaderCart.css";

function HeaderCart({ cartTotal, cartSize }) {
  return (
    <div className="HeaderCart">
      {!!cartSize && <span className="price">{formatPrice(cartTotal)}</span>}
      <Link to="/cart" className="icon">
        <i className="fas fa-shopping-cart"></i>
        {!!cartSize && <span className="qty">{cartSize}</span>}
      </Link>
    </div>
  );
}

HeaderCart.propTypes = {
  cartTotal: PropTypes.number.isRequired,
  cartSize: PropTypes.number.isRequired,
};

export default HeaderCart;
