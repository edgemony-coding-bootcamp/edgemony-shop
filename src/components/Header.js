import './Header.scss';
import PropTypes from 'prop-types';

const Header = ({ logo }) => (
	<header className='Header'>
		<img src={logo} alt='' />
	</header>
);

Header.propTypes = {
	logo: PropTypes.string.isRequired,
};

export default Header;
