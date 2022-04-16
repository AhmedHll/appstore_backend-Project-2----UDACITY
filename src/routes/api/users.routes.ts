import { Router, Request, Response } from 'express';

import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from '../../controllers/users.controller';

const routes = Router();

routes.route('/').get(getUsers).post(createUser);
routes.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default routes;
