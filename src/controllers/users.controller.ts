import { Request, Response, NextFunction } from 'express';
import userModel from '../models/userModel';
const User = new userModel('users');

// create user
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hashedPassword = await User.hashPassword(req.body.password);
    req.body.password = hashedPassword;
    const user = await User.create(req.body);
    res.status(200).json({
      status: 'success',
      data: { ...user },
      message: 'User Created Successfully',
    });
  } catch (error: any) {
    next(error);
  }
};

// get all users
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.getAll();
    res.json({
      status: 'success',
      data: users,
      message: 'Users retrieved Successfully 👨‍👨‍👧‍👧',
    });
  } catch (error) {
    next(error);
  }
};

// get specific user
const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.getOne('id', req.params.id);
    res.json({
      status: 'success',
      data: user,
      message: 'User retrieved successfully 😀',
    });
  } catch (error) {
    next(error);
  }
};

// update user
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  try {
    const update = await User.updateOne(id, req.body);
    res.json({
      status: 'success',
      data: update,
      message: 'User is updated successfully ✅',
    });
  } catch (error) {
    next(error);
  }
};

// delete user
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deleteUser = await User.deleteOne(req.params.id as unknown as string);
    res.json({
      status: 'success',
      data: deleteUser,
      message: 'User is deleted Successfully ❌',
    });
  } catch (error) {
    next(error);
  }
};

export { createUser, getUser, getUsers, deleteUser, updateUser };
