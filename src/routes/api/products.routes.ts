import { Router, Request, Response } from 'express';

import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from '../../controllers/products.controller';

const routes = Router();

routes.route('/').get(getProducts).post(createProduct);
routes.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

export default routes;
