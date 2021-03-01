import './Footer.scss';
import PropTypes from 'prop-types';
import date from '../utils/getYear';

const Footer = ({ title }) => (
	<footer className='Footer'>
		<nav>
			{date} &copy; {title}
		</nav>
	</footer>
);

Footer.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Footer;
