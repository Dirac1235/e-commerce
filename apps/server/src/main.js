import "dotenv/config";
import express from "express";
import { httpExceptionHandler } from "./middlewares/http-exception-handler";

import cors from "cors";
import { corsOptions } from "./constants/cors-options";

import authController from "./auth/auth.controller";
import productsController from "./products/products.controller";
import usersController from "./users/users.controller";
import postsController from "./posts/posts.controller";
import categoriesController from "./categories/categories.controller";
import wishlistController from "./wishlist/wishlist.controller";
import ordersController from "./order/orders.controller";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  const token = req.headers["jwt-token"];
  console.log(token);
  return res.json({
    message: "Hello",
  });
});

app.use("/posts", postsController);
app.use("/auth", authController);
app.use("/products", productsController);
app.use("/categories", categoriesController);
app.use("/users", usersController);
app.use("/wishlist", wishlistController);
app.use("/orders", ordersController);

app.all("*", (req, res) => {
  return res.status(404).json({ error: "Not Found" });
});

app.use(httpExceptionHandler);

app.listen(8000, () => {
  console.log("App is running at port: http://localhost:8000");
});
