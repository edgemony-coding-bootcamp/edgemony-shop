import './Product.scss';

const Product = ({ product }) => {
	return <div className='Product'>{product.title}</div>;
};

export default Product;
