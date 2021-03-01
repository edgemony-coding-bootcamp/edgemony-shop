import './Hero.scss';
import PropTypes from 'prop-types';

const Hero = ({ cover, description }) => {
	return (
		<section className='Hero'>
			<img src={cover} alt='' />
			<h2>{description}</h2>
		</section>
	);
};

Hero.propTypes = {
	cover: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default Hero;
