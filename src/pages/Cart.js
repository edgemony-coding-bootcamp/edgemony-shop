import "./Cart.css";
import { PropTypes } from "prop-types";
import CartProduct from "./../components/CartProduct";
import { formatPrice } from "../services/utils";

function Cart({ products, totalPrice, removeFromCart, setProductQuantity }) {
  return (
    <div className="Cart">
      <div className="Cart__content">
        {products.length > 0 ? (
          products.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
          ))
        ) : (
          <p className="Cart__content__empty">The cart is empty</p>
        )}
      </div>
      <footer>Total: {formatPrice(totalPrice)}</footer>
    </div>
  );
}

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
};

export default Cart;
