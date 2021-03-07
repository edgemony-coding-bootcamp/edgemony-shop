
import Categories from './Categories'
import { useState } from 'react';
import RenderProducts from "./RenderProducts"
import SearchProduct from './SearchProduct';
import "./WrapProducts.css"

function WrapProducts({products}) {
    const [productsRender, setProductsRender] =useState(products);
    const [productsActive, setProductsActive]=useState(undefined)
    return (
        <div className="WrapProducts">
          {/* {productsActive &&<Categories products={productsActive}  changeProductsRender={setProductsRender} productsActive={setProductsActive}/>*/}
          <SearchProduct products={products} productsRender={setProductsRender}/> 
          <Categories products={products}  changeProductsRender={setProductsRender} productsActive={setProductsActive}/> 
          <RenderProducts products={productsRender}/>
        </div>
    )
}

export default WrapProducts
