import express from "express";
import { asyncHandler } from "../helpers/async-handler";
import { authGuard } from "../auth/auth.guard";
import { roleGuard } from "../auth/role.guard";
import { createProductPipe, updateProductPipe } from "./products.pipe";
import {
  createProduct,
  deleteProduct,
  getManyProducts,
  getOneProduct,
  updateProduct,
} from "./products.service";


const productsController = express.Router();

productsController.get(
  "/",
  asyncHandler(async (req, res) => {
    const query = req.query;
    const products = await getManyProducts(query.category, query.search ?? "");
    return res.json(products);
  })
);

productsController.post(
  "/",
  authGuard,
  roleGuard(['CUSTOMER', 'ADMIN']),
  createProductPipe,
  asyncHandler(async (req, res) => {
    const data = req.body;
    const products = await createProduct(data);
    return res.json(products);
  }),
);

productsController.get(
  "/:id",

  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const products = await getOneProduct(id);
    return res.json(products);
  }),
);

productsController.put(
  "/:id",
  updateProductPipe,
  asyncHandler(async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const products = await updateProduct(id, data);
    return res.json(products);
  }),
);

productsController.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const products = await deleteProduct(id);
    return res.json(products);
  }),
);

export default productsController;