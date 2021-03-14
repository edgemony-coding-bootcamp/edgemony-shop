import { PropTypes } from "prop-types";

import "./ModalBodyCenter.css";

function ModalBodyCenter({ close, isOpen, children }) {
  return (
    <div className={`ModalBodyCenter ${isOpen ? `is-open` : ""}`}>
      <button onClick={close} title="close modal" className="close">
        ×
      </button>
      {children}
    </div>
  );
}

ModalBodyCenter.propTypes = {
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

export default ModalBodyCenter;
