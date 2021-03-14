import { PropTypes } from "prop-types";

import "./ModalSidebar.css";

function ModalSidebar({ isOpen, title, close, children }) {
  return (
    <div className={`ModalSidebar ${isOpen ? `is-open` : ""}`}>
      <div className="ModalSidebar__overlay" onClick={close}></div>
      <div className="ModalSidebar__body">
        <header>
          <button className="ModalSidebar__close" onClick={close}>
            X
          </button>
          <h2 className="ModalSidebar__title">{title}</h2>
        </header>

        <div className="ModalSidebar__content">{children}</div>
      </div>
    </div>
  );
}

ModalSidebar.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default ModalSidebar;
