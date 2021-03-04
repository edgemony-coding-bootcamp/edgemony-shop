import React from "react";
import Categories from "./Categories";

export default function NavBar({products}) {
  return (
    <>
      <Categories products={products} />
    </>
  );
}
