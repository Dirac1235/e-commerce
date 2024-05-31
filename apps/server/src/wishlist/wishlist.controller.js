import express from "express";
import { asyncHandler } from "../helpers/async-handler";
import { authGuard } from "../auth/auth.guard";
import { roleGuard } from "../auth/role.guard";
import { removeFromWishlist, getWishlist, addToWishlist } from "./wishlist.service";

const wishlistController = express.Router();

wishlistController.get(
  "/",
  authGuard,
  asyncHandler(async (req, res) => {
    const userId = req.user.id; // Assuming you have user data available in the request
    const wishlist = await getWishlist(userId);
    return res.json(wishlist);
  })
);

wishlistController.post(
  "/add",
  authGuard,
  asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const productId = req.body.productId;
    const wishlist = await addToWishlist(userId, productId);
    return res.json(wishlist);
  }),
);

wishlistController.delete(
  "/remove/:productId",
  authGuard,
  asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const productId = req.params.productId;
    const wishlist = await removeFromWishlist(userId, productId);
    return res.json(wishlist);
  }),
);

export default wishlistController;
