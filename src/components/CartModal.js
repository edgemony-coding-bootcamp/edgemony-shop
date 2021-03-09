import React from "react";
import "./CartModal.css";
import calcTotalPrice from "../services/utility";

function CartModal({ closeModal, cart, isOpen }) {
 
  console.log("carello", cart);

  return (
    <>
      {isOpen ? (
        <div className={`CartModal ${ isOpen ? `isOpen` : '' }`}>
          <div
            className="overlay"
            onClick={() => closeModal()}
          ></div>
          <div className="Cart">
            <header className={"Cart" + "-header"}>
              <h3>Cart</h3>
            </header>
            {cart.length > 0 && (
              <>
                <main className="body">
                  {cart.map((product) => {
                    console.log("produ", product);
                    return (
                      <>
                        <img src={product.image} alt={product.image} />
                        <h3>{product.title}</h3>
                        <h4>Quantity: 1</h4>
                        <h4 className="price"> {product.price}</h4>
                      </>
                    );
                  })}
                </main>
                <footer className="CartModal__footer">
                  <span>{calcTotalPrice(cart).toFixed(2)}</span>
                </footer>
              </>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default CartModal;
