import { rest } from "msw";
const products = require("./data/products.json");
const categories = require("./data/categories.json");

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function randomError(resolverFn) {
  return function (req, res, ctx) {
    sleep(2000);
    if (Math.random() > 0.8) {
      return res(ctx.status(500));
    }
    return resolverFn(req, res, ctx);
  };
}

export const handlers = [
  rest.get(
    "/products",
    randomError(function orderItems(req, res, ctx) {
      const limit = req.url.searchParams.get("limit");
      const q = req.url.searchParams.get("q");
      let filteredProducts = products;
      if (q) {
        filteredProducts = products.filter(
          (product) => product.title.search(new RegExp(q, "i")) !== -1
        );
      }
      if (limit) {
        filteredProducts = filteredProducts.slice(0, limit);
      }
      return res(ctx.status(200), ctx.json(filteredProducts));
    })
  ),
  rest.get(
    "/products/categories",
    randomError(function orderItems(req, res, ctx) {
      return res(ctx.status(200), ctx.json(categories));
    })
  ),
  rest.get(
    "/products/categories/:category",
    randomError(function orderItems(req, res, ctx) {
      const { category } = req.params;
      const filteredProducts = products.filter((p) => p.category === category);
      return res(ctx.status(200), ctx.json(filteredProducts));
    })
  ),
  rest.get(
    "/products/:productId",
    randomError(function orderItems(req, res, ctx) {
      const { productId } = req.params;
      const product = products.find((p) => p.id + "" === productId);
      if (product) {
        return res(ctx.status(200), ctx.json(product));
      }
      return res(ctx.status(404));
    })
  ),
];
