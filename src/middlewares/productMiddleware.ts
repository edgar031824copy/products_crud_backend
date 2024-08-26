import { Request, Response, NextFunction } from 'express';
import { validateData } from '../schemas/product';

export const validateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = validateData(req.body);

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};
