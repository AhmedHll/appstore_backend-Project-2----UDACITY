import { Request, Response, NextFunction, RequestHandler } from 'express';
import Model from '../models/Model';
const Order = new Model('orders');

// create order
const createOrder: RequestHandler = async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { ...order },
      message: 'Order Created Successfully 🚕',
    });
  } catch (error: unknown) {
    next(error);
  }
};

// get all Orders
const getOrders: RequestHandler = async (req, res, next) => {
  try {
    const order = await Order.getAll();
    res.json({
      status: 'success',
      data: order,
      message: 'Orders retrieved Successfully 🚞🪂',
    });
  } catch (error) {
    next(error);
  }
};

// get specific Order
const getOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await Order.getOne('id', req.params.id);
    res.json({
      status: 'success',
      data: order,
      message: 'Order retrieved successfully 🛴',
    });
  } catch (error) {
    next(error);
  }
};

// update Order
const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  try {
    const update = await Order.updateOne(id, req.body);
    res.json({
      status: 'success',
      data: update,
      message: 'Order is updated successfully ✈',
    });
  } catch (error) {
    next(error);
  }
};

// delete Order
const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deleteOrder = await Order.deleteOne(
      req.params.id as unknown as string
    );
    res.json({
      status: 'success',
      data: deleteOrder,
      message: 'Order is deleted Successfully ❌',
    });
  } catch (error) {
    next(error);
  }
};

// add Product

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
  const order_Id: string = req.params.id;
  const product_Id: string = req.body.product_Id;
  const quantity: number = parseInt(req.body.quantity);

  try {
    const addedProduct = await Order.addProduct(quantity, order_Id, product_Id);
    res.json(addedProduct);
  } catch (error) {
    res.status(400);
    res.json(error);
    next(error);
  }
};
export { createOrder, getOrders, getOrder, updateOrder, deleteOrder, addProduct};
