
import Categories from './Categories'
import { useState } from 'react';
import RenderProducts from "./RenderProducts"
import SearchProduct from './SearchProduct';

function WrapProducts({products}) {
    const [productsRender, setProductsRender] =useState(products);

    return (
        <div>
          {/* <SearchProduct /> */}
          <Categories products={products}  changeProductsRender={setProductsRender} />
          <RenderProducts products={productsRender}/>
        </div>
    )
}

export default WrapProducts
