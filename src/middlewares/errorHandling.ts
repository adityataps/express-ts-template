/**
 * @file @/middlewares/errorHandling.ts
 * @description Middleware for error handling.
 */
import { NextFunction, Request, Response } from 'express';

import { HttpError } from '@/models/errors/httpErrors';
import { RequestErrorResponse } from '@/models/errors/types';

/**
 * Express middleware function for handling errors.
 * @param {HttpError} err - error to be handled
 * @param {Request} req - request
 * @param {Response} res - response
 * @param {NextFunction} next - next function
 * @returns {Response} error response
 */
function errorHandlerMiddleware(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  console.error(err);

  res.status(err.statusCode).json({
    errorName: err.name,
    errorMessage: err.statusCode === 500 ? 'An internal server error occurred' : err.message,
    errorRoute: req.originalUrl,
    errorStatusCode: err.statusCode,
    errorData: err.data,
  } as RequestErrorResponse);
}

export default errorHandlerMiddleware;
