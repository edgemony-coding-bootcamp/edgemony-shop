import Categories from "./Categories";
import { useState } from "react";
import RenderProducts from "./RenderProducts";
import SearchProduct from "./SearchProduct";
import "./WrapProducts.css";

function WrapProducts({ products, setCart }) {
  const [inputUser, setInputUser] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  

  function search(e) {
    console.log(e.target.value);
    const target = e.target.value;
    setInputUser(target);
  }
  
  const filteredProducts=products.filter((product)=>
    ((inputUser ? (selectedCategories.length===0 ?product.title.toUpperCase().includes(inputUser.toUpperCase()):
    selectedCategories.includes(product.category)):(selectedCategories.length===0 ? product :selectedCategories.includes(product.category) ))
  ))

  return (
    <div className="WrapProducts">
      <SearchProduct
       search={search}
      />
      <Categories
        products={products}
        selectedCategories={selectedCategories}
        onSelectCategory={setSelectedCategories}
      />
      <RenderProducts products={filteredProducts} setCart={setCart}/>
    </div>
  );
}

export default WrapProducts;
