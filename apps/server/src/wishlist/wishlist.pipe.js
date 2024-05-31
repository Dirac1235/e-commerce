import { HttpException } from '../constants/http-exception';
import { formatZodError } from '../constants/format-zod-error';
import { addToWishlistSchema } from './wishlist.validation';

export function addToWishlistPipe(req, res, next) {
  const { productId, userId  } = req.body;
  const result = addToWishlistSchema.safeParse({ productId, userId });
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}
