import React, { useEffect, useState } from "react";
import "./BtnCategory.css";

function BtnCategory({
  category,
  products,
  setAllProductsToRender,
  AllProductsToRender,
  setcountBtnActive
}) {
  const [isActive, setActive] = useState(false);
  const [productsOfCategories, setProductsOfCategory] = useState([]);
 

  function getCategory(category) {
    const filterCategory = products.filter(
      (product) => product.category.toUpperCase() === category
    );
    return filterCategory;
  }

  useEffect(() => {
    const prova = createArrayToSendToRender();
    console.log("bo", prova);
  
  }, [isActive]);

  function filterProductsOfCategory(ev) {
    setProductsOfCategory(getCategory(ev.target.innerText));
    setActive(!isActive);
  }

  function createArrayToSendToRender() {
    if (isActive) {
      if (AllProductsToRender.length > 1 && productsOfCategories.length > 1) {
        const filterArray = productsOfCategories.filter((prod, index) => {
          if (
            !prod.category.includes(
              prod.category[(0, AllProductsToRender.length)]
              ) === false
              ) {
                setAllProductsToRender((previousState) => [
                  ...previousState,
              { ...productsOfCategories[index] },
            ]);
          }
        });
      } else {
        setAllProductsToRender(productsOfCategories);
      }
      setcountBtnActive((previousState) => [
        parseInt(previousState)+1
      ])
    }
    return AllProductsToRender;
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
