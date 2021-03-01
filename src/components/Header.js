import './Header.scss';
import PropTypes from 'prop-types';

const Header = ({ logo, title }) => (
	<header className='Header'>
		<img src={logo} alt='' />
		<span>{title}</span>
	</header>
);

Header.propTypes = {
	logo: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Header;
