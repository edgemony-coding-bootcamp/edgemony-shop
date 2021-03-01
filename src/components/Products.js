import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

function Products (props){
    return(
        <main>
            {props.products.map((product)=>{
                return(
                    <>
                <CardProduct 
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    /> 
                    </>)
            })}
        </main>
    )
}

Products.propTypes={
    products:PropTypes.array.isRequired
 }

 export default Products;