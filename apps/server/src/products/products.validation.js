import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2).max(50),
  price: z.number().positive(),
  description: z.string().optional(),
  image: z.string().optional(),
  categoryId: z.string().optional(),
});
