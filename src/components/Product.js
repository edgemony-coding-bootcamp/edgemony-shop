import './Product.scss';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
	const { category, description, image, price, title } = product;
	return (
		<fieldset className='Product'>
			<legend className='product-img'>
				<img src={image} alt='' />
			</legend>

			<div className='product-info'>
				<div className='product-text'>
					<h1>{title}</h1>
					<h2>{category}</h2>
					<p>{description}</p>
				</div>
				<div class='product-price-btn'>
					<p>
						<span>€ {price}</span>
					</p>
					<button type='button'>View details</button>
				</div>
			</div>
		</fieldset>
	);
};

Product.propTypes = {
	product: PropTypes.object.isRequired,
};

export default Product;
