import PropTypes from "prop-types";
import "./CardProduct.css";
import DetailsProduct from "./DetailsProduct";
import React, { useState } from "react";

function CardProduct(props) {
  const { title, image, price, description } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleClick() {
    setModalIsOpen(true);
  }
  function renderProduct() {
    return (
      <div className="cardWrap">
        <h3>{title}</h3>
        <img src={image} alt={image} />
        <span>€ {price.toFixed(2)}</span>
        <button type="button" onClick={handleClick}>
          View details
        </button>
        <span>{description}</span>
      </div>
    );
  }

  return (
    <>
      {renderProduct()}
      {modalIsOpen?
      <DetailsProduct data={props} isOpen={()=>{setModalIsOpen(false)}}/>:
      <></>
      }
    </>
  );
}

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardProduct;
