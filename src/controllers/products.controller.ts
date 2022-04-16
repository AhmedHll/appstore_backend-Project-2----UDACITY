import { Request, Response, NextFunction } from 'express';
import Model from '../models/Model';

const Product = new Model('products');

// create Product
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { ...product },
      message: 'Product Created Successfully ✔',
    });
  } catch (error: any) {
    next(error);
  }
};

// get all Products
const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Product.getAll();
    res.json({
      status: 'success',
      data: product,
      message: 'Products retrieved Successfully ⚓',
    });
  } catch (error) {
    next(error);
  }
};

// get specific Product
const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Product.getOne(req.params.id as unknown as string);
    res.json({
      status: 'success',
      data: product,
      message: 'Product retrieved successfully 🛴',
    });
  } catch (error) {
    next(error);
  }
};

// update Product
const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    const update = await Product.updateOne(id, req.body);
    res.json({
      status: 'success',
      data: update,
      message: 'Product is updated successfully ✈',
    });
  } catch (error) {
    next(error);
  }
};

// delete Product
const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deleteProduct = await Product.deleteOne(
      req.params.id as unknown as string
    );
    res.json({
      status: 'success',
      data: deleteProduct,
      message: 'Product is deleted Successfully ❌',
    });
  } catch (error) {
    next(error);
  }
};
export { createProduct, getProduct, getProducts, deleteProduct, updateProduct };
