import PropTypes from 'prop-types';


function CardProduct(props){
    const {title,image,price}=props;
    return(
        <div>
            <h3>{title}</h3>
            <img src={image} alt={image}/>
            <span>{price}</span>
            <button>View details</button>
        </div>
    )
}

CardProduct.propTypes={
    title:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
 }
 
export default CardProduct;