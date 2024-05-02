import { Elysia } from "elysia";
import productRoutes from './modules/product/product.routes'
import { error } from "./middlewares/error.middleware";

const app = new Elysia()
  .use(error)
  .get("/", () => "Hello Elysia")
  .use(productRoutes)
  .listen(process.env.PORT || 5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
