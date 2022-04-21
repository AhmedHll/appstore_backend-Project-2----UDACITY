import { Router, Request, Response } from 'express';

import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from '../../controllers/products.controller';
import authenticate from '../../middlewares/authentication.middleware';

const routes = Router();

routes.route('/').get(getProducts).post(authenticate, createProduct);
routes
  .route('/:id')
  .get(getProduct)
  .patch(authenticate, updateProduct)
  .delete(authenticate, deleteProduct);

export default routes;
