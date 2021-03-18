import { Link } from "react-router-dom";
import { formatPrice } from "../services/utility";
import "./HeaderCart.css"
export default function HeaderCart({ cart, cartTotal }) {
  console.log("cartTotal", cartTotal);
  const nItems = cart.length;
  return (
    <div className="HeaderCart">
      {!!nItems && (
        <span id="totalPrice">Total Price: € {formatPrice(cartTotal)}</span>
      )}
      <button type="button">
        <Link to="/cart">
          <i id="icon-cart" class="fa fa-shopping-cart"></i>
          <span id="numItemsCart">{nItems}</span>
        </Link>
      </button>
    </div>
  );
}
