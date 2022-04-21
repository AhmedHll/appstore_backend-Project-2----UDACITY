import { Router, Request, Response } from 'express';

import {
  createOrder,
  deleteOrder,
  getOrders,
  getOrder,
  updateOrder,
  addProduct,
} from '../../controllers/orders.controller';
import authenticate from '../../middlewares/authentication.middleware';

const routes = Router();

routes.route('/').get(authenticate, getOrders).post(authenticate, createOrder);
routes.route('/:id').get(authenticate, getOrder).patch(authenticate, updateOrder).delete(authenticate, deleteOrder);
routes.route('/:id/products').post(addProduct);
export default routes;
