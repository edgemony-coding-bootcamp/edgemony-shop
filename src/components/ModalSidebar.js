import React from "react";
import "./CartModal.css";

function ModalSidebar({ isOpen, close, children }) {
  console.log("isOpen",isOpen);
  return (
    <>
    {isOpen?
      <div>
        <header className={"Cart" + "-header"}>
          <h3>Cart</h3>
        </header>
        <>
          <main className="Modal__content">{children}</main>
          <footer className="Modal__footer"></footer>
        </>
      </div>:
      <>Ciao</>
    }
    </>
  );
}

export default ModalSidebar;
