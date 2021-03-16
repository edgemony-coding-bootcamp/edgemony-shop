import PropTypes from "prop-types";
import "./CardProduct.css";
import React from "react";
import { Link } from "react-router-dom";

function CardProduct({product,openProductModal}) {
  const { title, image, price,id } =product;
  
    return (
      <div className="cardWrap">
        <h3>{title}</h3>
        <img src={image} alt={image} />
        <span>€ {price.toFixed(2)}</span>
        <button type="button">
          <Link to={`/products/${id}`}>View Details</Link>
        </button>
      </div>
    )
}

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardProduct;
