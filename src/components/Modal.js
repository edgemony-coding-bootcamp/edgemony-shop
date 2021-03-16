import { PropTypes } from "prop-types";

import "./Modal.css";

function Modal({ close, isOpen, children }) {
  return (
    <div className={`Modal ${isOpen ? `is-open` : ""}`}>
      <div className="overlay" onClick={close} />
      {children}
    </div>
  );
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
