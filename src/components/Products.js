import Product from './Product';
import './Products.scss';

const Products = ({ products }) => {
	return (
		<section className='Products'>
			{products.map((product) => (
				<Product product={product} />
			))}
		</section>
	);
};

export default Products;
