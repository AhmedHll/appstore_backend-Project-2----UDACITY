import { NextFunction, Request, Response } from 'express';

const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(401).json({
    message: error.message,
  });
};
export default errorHandler;
