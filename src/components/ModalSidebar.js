import React from "react";
import "./CartModal.css";


function CartModal({
  isOpen,
  close,
  children
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
               {children}
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
