/**
 * @file @/routes/index/schemas.ts
 * @description Boilerplate schemas for the "/" route.
 */
import { z } from 'zod';

/** GET / */
/**
 * @type Schema for the response of the GET / route.
 * @param {string} message - message to be displayed
 * @param {string} status - status of the response
 * @param {string} timestamp - timestamp of the response
 */
const GetIndexResponseSchema = z.object({
  message: z.string(),
  status: z.string(),
  timestamp: z.string(),
});
type GetIndexResponse = z.infer<typeof GetIndexResponseSchema>;

/** POST / */
/**
 * @type Schema for the request body of the POST / route.
 * @param {string} name - name of the user
 * @param {number} age - age of the user
 */
const PostIndexRequestBodySchema = z.object({
  name: z.string(),
  age: z.number().int().positive(),
});
type PostIndexRequestBody = z.infer<typeof PostIndexRequestBodySchema>;

/**
 * @type Schema for the response of the POST / route.
 * @param {string} message - message to be displayed
 */
const PostIndexResponseBodySchema = z.object({
  message: z.string(),
});
type PostIndexResponseBody = z.infer<typeof PostIndexResponseBodySchema>;

export {
  GetIndexResponse,
  GetIndexResponseSchema,
  PostIndexRequestBody,
  PostIndexRequestBodySchema,
  PostIndexResponseBody,
  PostIndexResponseBodySchema,
};
