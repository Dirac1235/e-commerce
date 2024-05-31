import { createPostSchema } from "./post.validation"
import {formatZodError } from "../constants/format-zod-error";
import { HttpException } from "../constants/http-exception";

export function createPostPipe(req, res, next) {
  const data = req.body;
  const result = createPostSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}

export function updatePostPipe(req, res, next) {
    const data = req.body;
    const result = createPostSchema.safeParse(data);
    if (!result.success) {
      throw new HttpException(formatZodError(result.error), 400);
    }
    req.body = result.data;
    next();
  }