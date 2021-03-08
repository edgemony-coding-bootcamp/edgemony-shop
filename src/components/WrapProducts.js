
import Categories from './Categories'
import { useState } from 'react';
import RenderProducts from "./RenderProducts"
import SearchProduct from './SearchProduct';
import "./WrapProducts.css"

function WrapProducts({products}) {
    const [productsRender, setProductsRender] =useState(products);
    const [isActiveSearch, setActiveSearch]=useState(false)
    const [isActiveCategory, setActiveCategory]=useState(false)
    const [productsRenderToSearch,setProductsRenderToSearch]=useState(products)
    return (
        <div className="WrapProducts">
          {/* {productsActive &&<Categories products={productsActive}  changeProductsRender={setProductsRender} productsActive={setProductsActive}/>*/}
          <SearchProduct products={productsRender} productsRenderToSearch={setProductsRenderToSearch} activeSearch={setActiveSearch}/> 
          <Categories products={products}  changeProductsRender={setProductsRender} activeCategory={setActiveCategory}/> 
          {/* {isActiveSearch && <RenderProducts products={productsRenderToSearch}/>} */}
          {isActiveCategory ? <RenderProducts products={productsRender}/> :<RenderProducts products={products}/> }
        </div>
    )
}

export default WrapProducts
