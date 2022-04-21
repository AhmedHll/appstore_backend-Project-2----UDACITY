import { Router, Request, Response } from 'express';
import login from '../../controllers/auth';
import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from '../../controllers/users.controller';
import authenticate from '../../middlewares/authentication.middleware';
// import authenticationMiddleware from '../../middlewares/authentication.middleware';
const routes = Router();

// api/users
// authenticationMiddleware,
routes.route('/').get(authenticate, getUsers).post(createUser);
routes
  .route('/:id')
  .get(authenticate, getUser)
  .patch(authenticate, updateUser)
  .delete(authenticate, deleteUser);

// authentication
routes.route('/authenticate').post(login);
export default routes;
