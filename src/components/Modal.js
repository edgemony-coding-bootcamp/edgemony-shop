import React from "react";
import "./Modal.css";
function Modal(isOpen, close, children) {
  console.log("isOpen", isOpen);
  return (
    <>
      <div className={`Modal ${!isOpen ? `isOpen` : ""}`} onClick={close}>
        <div className="Modal__overlay" onClick={close}></div>
        <div className="Modal__body">{console.log("ciao")}{children}</div>
      </div>
    </>
  );
}

export default Modal;
