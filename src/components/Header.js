import PropTypes from "prop-types";
import "./Header.css";

function Header({ logo }) {
  return (
    <header className="Header">
      <img src={logo} alt={logo} />
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
