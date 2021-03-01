import Product from './Product';
import './Products.scss';
import PropTypes from 'prop-types';

const Products = ({ products }) => {
	return (
		<section className='Products'>
			{products.map((product, key) => (
				<Product key={key} product={product} />
			))}
		</section>
	);
};

Products.propTypes = {
	products: PropTypes.array.isRequired,
};

export default Products;
