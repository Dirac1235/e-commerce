import { formatZodError } from '../constants/format-zod-error';
import { HttpException } from '../constants/http-exception';
import { createProductSchema } from './products.validation';

export function createProductPipe(req, res, next) {
  const data = req.body;
  const result = createProductSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}

export function updateProductPipe(req, res, next) {
  const data = req.body;
  const result = createProductSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  console.log(req.body)
  next();
}