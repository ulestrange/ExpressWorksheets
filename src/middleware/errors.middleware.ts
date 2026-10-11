import { NextFunction, Request, Response } from "express";
import { AppError, ValidationError } from "../utils/errors";

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  
  if (err instanceof ValidationError) {
  res.status(400).json({
    success: false,
    message: err.message,
    errors: err.details
  });

  return;
}

    if (err instanceof AppError) {
 
        res.status(err.statusCode).json({
        error: err.name,
        message: err.message
    });

}
  
  console.error(err);
  res.status(500).send({ errors: [{ message: "Something went wrong" }] });
};