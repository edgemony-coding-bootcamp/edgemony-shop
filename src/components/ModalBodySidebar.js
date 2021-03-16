import { PropTypes } from "prop-types";

import "./ModalBodySidebar.css";

function ModalBodySidebar({ isOpen, title, close, children }) {
  return (
    <div className={`ModalBodySidebar ${isOpen ? `is-open` : ""}`}>
      <header>
        <button className="ModalBodySidebar__close" onClick={close}>
          X
        </button>
        <h2 className="ModalBodySidebar__title">{title}</h2>
      </header>

      <div className="ModalBodySidebar__content">{children}</div>
    </div>
  );
}

ModalBodySidebar.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default ModalBodySidebar;
