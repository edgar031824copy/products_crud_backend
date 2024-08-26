import { Request, Response } from 'express';
import Product from '../models/Product.model';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await Product.findAll();

    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await Product.findOne({
      where: {
        id,
      },
    });

    if (!data) {
      return res.status(404).json({ msg: 'Product does not exist' });
    }

    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.destroy({
      where: {
        id,
      },
    });

    if (!product) {
      return res.status(404).json({ msg: 'Product does not exist' });
    }

    res.json({ data: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: {
        id,
      },
    });

    if (!product) {
      return res.status(404).json({ msg: 'Product does not exist' });
    }

    await product.update(req.body);
    await product.save();

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};
