import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

import Hero from "./../components/Hero";
import Loader from "./../components/Loader";
import ProductList from "./../components/ProductList";
import { fetchProducts, fetchCatogories } from "./../services/api";

const data = {
  title: "Edgemony Shop",
  description: "A fake e-commerce with a lot of potential",
  logo:
    "https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png",
  cover:
    "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

let cache;

function Home({ onError }) {
  // API data logic
  const [products, setProducts] = useState(cache?.products || []);
  const [categories, setCategories] = useState(cache?.categories || []);
  const [isLoading, setIsLoading] = useState(false);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    if (cache) {
      return;
    }
    setIsLoading(true);
    onError(undefined);
    Promise.all([fetchProducts(), fetchCatogories()])
      .then(([products, categories]) => {
        setProducts(products);
        setCategories(categories);
        cache = { products, categories };
      })
      .catch(({ message }) =>
        onError({ message, retry: () => setRetry(!retry) })
      )
      .finally(() => setIsLoading(false));
  }, [retry, onError]);

  return (
    <div>
      <Hero
        title={data.title}
        description={data.description}
        cover={data.cover}
      />
      <main>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductList products={products} categories={categories} />
        )}
      </main>
    </div>
  );
}

Home.propTypes = {
  onError: PropTypes.func.isRequired,
};

export default Home;
