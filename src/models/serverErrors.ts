/**
 * @file @/models/serverErrors.ts
 * @description This file defines custom errors for internal server errors.
 */

/**
 * Custom error for environment variable errors.
 * @extends Error
 * @param {string} key - environment variable key
 * @example
 * throw new EnvironmentVariableError('MY_ENV_VAR');
 */
class EnvironmentVariableError extends Error {
  constructor(key?: string) {
    super(`Missing environment variable key${key ? `: ${key}` : ''}`);
    this.name = 'EnvironmentVariableError';
  }
}

export { EnvironmentVariableError };
