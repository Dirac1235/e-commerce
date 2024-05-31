import express from "express";
import { asyncHandler } from "../helpers/async-handler";
import { createUser, findUserById, loginUser } from "./auth.service";
import generateJwtToken from "./jwt/generate-jwt-token";


const authController = express.Router();

authController.post(
  "/register",
  asyncHandler(async (req, res) => {
    const data = req.body;
    console.log(data);
    const user = await createUser(data);
    const token = generateJwtToken(user);
    const message = "success"
    return res.json({ user, token, message });
  })
);

authController.post(
  "/login",
  asyncHandler(async (req, res) => {
    const data = req.body;
    const user = await loginUser(data);
    const token = generateJwtToken(user);
    const message = "success"
    return res.json({ user, token, message });
  })
);
export default authController;
