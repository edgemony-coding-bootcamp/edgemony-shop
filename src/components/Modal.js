import { PropTypes } from "prop-types";

import "./Modal.css";

function Modal({ close, isOpen, children }) {
  return (
    <div className={`Modal ${isOpen ? `isOpen` : ""}`}>
      <div className="overlay" onClick={close} />
      <div className="body">
        <button
          onClick={close}
          title="close product modal"
          className="close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
