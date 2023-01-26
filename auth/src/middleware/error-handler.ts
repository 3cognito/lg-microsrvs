import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("An error occured", err);

  res.status(500).json({
    message: err.message,
  });
};
