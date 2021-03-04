import { rest } from "msw";
const products = require("./data/products.json");
const categories = require("./data/categories.json");

function randomError(resolverFn) {
  return function (req, res, ctx) {
    if (Math.random() > 0.6) {
      return res(
        ctx.status(500),
        ctx.json({ message: "An expected error occurred" })
      );
    }
    return resolverFn(req, res, ctx);
  };
}

export const handlers = [
  rest.get(
    "/products",
    randomError(function orderItems(req, res, ctx) {
      const q = req.url.searchParams.get("q");
      const limit = parseInt(req.url.searchParams.get("limit"));
      const offset = parseInt(req.url.searchParams.get("offset")) || 0;
      let filteredProducts = products;
      if (q) {
        filteredProducts = products.filter(
          (product) => product.title.search(new RegExp(q, "i")) !== -1
        );
      }
      if (limit) {
        filteredProducts = filteredProducts.slice(offset, offset + limit);
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
