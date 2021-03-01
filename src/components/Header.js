import PropTypes from "prop-types";

import "./Header.css";

function Header({ logo, title }) {
  return (
    <header className="Header">
      <img src={logo} alt={title} />
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
