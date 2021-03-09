import "./CartModal.css";
import { PropTypes } from "prop-types";
import CartProduct from "./CartProduct";
import { formatPrice } from "../services/utils";

function CartModal({
  products,
  isOpen,
  close,
  totalPrice,
  removeFromCart,
  setProductQuantity,
}) {
  return (
    <div className={`CartModal ${isOpen ? `is-open` : ""}`}>
      <div className="CartModal__overlay" onClick={close}></div>
      <div className="CartModal__body">
        <header>
          <button className="CartModal__close" onClick={close}>
            X
          </button>
          <h2 className="CartModal__title">Cart</h2>
        </header>
        <div className="CartModal__content">
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
            <p className="CartModal__content__empty">The cart is empty</p>
          )}
        </div>
        <footer>Total: {formatPrice(totalPrice)}</footer>
      </div>
    </div>
  );
}

CartModal.propTypes = {
  products: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
};

export default CartModal;
