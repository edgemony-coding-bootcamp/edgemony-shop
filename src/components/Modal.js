import React from 'react'
import "./CartModal.css";
function Modal(isOpen, close, children) {
    
        return (
          <>
            {isOpen ? (
              <div
                className={`CartModal ${isOpen ? `isOpen` : ""}`}
                onClick={() => close}
              >
                <div className="CartModal__overlay" onClick={() => close}></div>
                {children}
              </div>
            ) : (
              <></>
            )}
          </>
        );
      }

export default Modal
