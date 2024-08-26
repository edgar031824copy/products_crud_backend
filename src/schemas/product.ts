import { z } from 'zod';

const ProductSchema = z.object({
  name: z.string().min(1),
  price: z.number().positive(),
  availability: z.boolean().optional(),
});

type Product = z.infer<typeof ProductSchema>;

export const validateData = (product: Product) => {
  return ProductSchema.safeParse(product);
};
