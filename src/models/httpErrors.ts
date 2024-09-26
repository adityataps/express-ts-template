/**
 * @file @/models/httpErrors.ts
 * @description This file defines custom errors to be used in the API.
 */

/**
 * Custom error for HTTP requests.
 * @extends Error
 * @param {string} message - error message
 * @param {number} statusCode - HTTP status code
 * @param {Error} originalError - original error object
 * @param {Record<string, any>} data - additional data to be included in the error response
 * @example
 * throw new HttpError('Not found', 404);
 */
class HttpError extends Error {
  public readonly statusCode: number;
  public readonly originalError?: Error;
  public readonly data?: Record<string, any>;

  constructor(message: string, statusCode: number);
  constructor(
    message: string,
    statusCode: number,
    originalError?: Error,
    data?: Record<string, any>,
  );
  constructor(
    message: string,
    statusCode: number,
    originalError?: Error,
    data?: Record<string, any>,
  ) {
    super(message);
    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.originalError = originalError;
    this.data = data;

    if (originalError?.stack) {
      this.stack += `\n\n---\nCaused by: \n${originalError.stack}`;
    }
  }

  /**
   * Returns a JSON representation of the error.
   * @returns {Record<string, any>} - JSON representation of the error
   */
  public toJSON(): Record<string, any> {
    return {
      message: this.message,
      statusCode: this.statusCode,
      originalError: this.originalError,
      data: this.data,
    };
  }
}

/**
 * Custom error for bad requests.
 * @extends HttpError
 * @param {string} message - error message
 * @param {Record<string, any>} data - additional data for the error response
 * @example
 * throw new BadRequestError('Invalid input', { requiredParam: "missing" });
 */
class BadRequestError extends HttpError {
  constructor(message: string, data: Record<string, any>) {
    super(message, 400, undefined, data);
    this.name = 'BadRequestError';
  }
}

/**
 * Custom error for internal server errors.
 * @extends HttpError
 * @param {string} message - error message
 * @param {Error} originalError - original error object
 * @example
 * throw new InternalServerError('Something went wrong', Error(...));
 */
class InternalServerError extends HttpError {
  constructor(message: string, originalError?: Error) {
    super(message, 500, originalError); // 500 Internal server error
    this.name = 'InternalServerError';
  }
}

export { HttpError, BadRequestError, InternalServerError };
