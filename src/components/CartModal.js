import React from "react";
import "./CartModal.css";

import CartProduct from "./CartProduct";
import { formatPrice } from "../services/utility";

function CartModal({
  products,
  isOpen,
  close,
  totalPrice,
  removeFromCart,
  setProductQuantity,
}) {
  return (
    <>
      {isOpen ? (
        <div className={`CartModal ${isOpen ? `isOpen` : ""}`} onClick={() => close()}>
          <div className="CartModal__overlay" onClick={() => close()}></div>
          <div className="CartModal__body">
            <header className={"Cart" + "-header"}>
              <h3>Cart</h3>
            </header>
            <>
              <main className="CartModal__content">
                {products.map((product) => {
                  console.log("product", product);
                  return (
                    <>
                      <CartProduct
                        product={product}
                        key={product.id}
                        removeFromCart={removeFromCart}
                        setProductQuantity={setProductQuantity}
                      />
                      <hr></hr>
                    </>
                  );
                })}
                <span>Total: {formatPrice(totalPrice.toFixed(2))}</span>
              </main>
              <footer className="CartModal__footer">
              </footer>
            </>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default CartModal;
