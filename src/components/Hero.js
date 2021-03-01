import './Hero.scss';
import PropTypes from 'prop-types';

const Hero = ({ cover, description, title }) => {
	return (
		<section className='Hero'>
			<h1>{title}</h1>
			<img src={cover} alt='' />
			<h2>{description}</h2>
		</section>
	);
};

Hero.propTypes = {
	cover: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Hero;
