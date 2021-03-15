import React from "react";

function ProductDetail({ content, inCart, addToCart, removeFromCart }) {
  
    const toggleCart = () => {
    if (inCart) {
      removeFromCart(content.id);
    } else {
      addToCart(content.id);
    }
  };
  return <div>
      {!!content ? (
          <div className="content">
            <img src={content.image} alt={content.title} />
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <button type="button" className="addToCart" onClick={toggleCart}>
              {inCart ? "Remove to Cart -" : "Add to Cart +"}
            </button>
            <br />
            <br />
            <hr />
            <div className="price">
              <small>Price:</small> {(content.price).toFixed(2)}€
            </div>
          </div>
        ) : null}
  </div>;
}

export default ProductDetail;
