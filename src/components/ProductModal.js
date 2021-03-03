import React from 'react';
import PropTypes from 'prop-types';
import './ProductModal.scss';

const ProductModal = ({ isOpen, closeModal, product }) => {
	const { category, description, image, price, title } = product;
	return isOpen ? (
		<div
			className='ProductModal'
			onClick={() => {
				closeModal();
			}}>
			<div className='modalBody'>
				<img src={image} alt='' />
				<h1>{title}</h1>
				<h2>{category}</h2>
				<p>{description}</p>
				<p>
					<span>Price € {price}</span>
				</p>
			</div>
		</div>
	) : null;
};

ProductModal.propTypes = {
	product: PropTypes.object.isRequired,
	isOpen: PropTypes.bool.isRequired,
	closeOpen: PropTypes.func,
};

export default ProductModal;
