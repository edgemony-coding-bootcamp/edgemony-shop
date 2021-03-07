import React, { useState } from "react";
import "./BtnCategory.css";

function BtnCategory({
  category,
  productsActive,
  products,
  changeProductsRender,
  setAllProductsToRender,
  AllProductsToRender,
}) {
  const [isActive, setActive] = useState(false);
  const [productsOfCategories, setProductsOfCategory] = useState([]);
  const [isTrue,setTrue]=useState(false)
  console.log("AllProducts", AllProductsToRender);

  function getCategory(category) {
    const filterCategory = products.filter(
      (product) => product.category.toUpperCase() === category
    );
    return filterCategory;
  }
  // function includesProduct(list, product) {
  //   return list.includes(product.category);
  //   };
  

  function filterProductsOfCategory(ev) {
    const productsOfCategory = getCategory(ev.target.innerText);
    setActive(!isActive);

    console.log("boo", productsOfCategory);
    setProductsOfCategory([...productsOfCategories, productsOfCategory]);
    console.log("boo3", productsOfCategory);

    productsOfCategory.map((product, index) => {
      // if(!isActive){
        /** */
      
      if(AllProductsToRender.length>1 && isActive){
          AllProductsToRender.filter(prod => {
          if(prod.category.includes(product.category)){
            setActive(true)
          }
          
          console.log("bool",!prod.category.includes(product.category))
          setAllProductsToRender((previousState) => [
            ...previousState,
            { ...product },
        ]);
        })
      }
      else{
        setAllProductsToRender((previousState) => [
          ...previousState,
          { ...product },
        ]);
      }
      
      // if()&&AllProductsToRender.length>1){
        
      // }

      // }
    });
  }
  return (
    <div className="navBarBtn">
      <button
        className={isActive ? "isActive" : "isNotActive"}
        id={category}
        key={category}
        type="button"
        onClick={(ev) => filterProductsOfCategory(ev, products)}
      >
        {category}
      </button>
    </div>
  );
}

export default BtnCategory;
