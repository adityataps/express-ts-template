/**
 * @file @/routes/index/schemas.ts
 * @description Boilerplate schemas for the "/" route.
 */
import { Schema, z } from 'zod';

/**
 * @type Example BaseResponse
 * @param {string} message - message to be displayed
 * @param {string} status - status of the response
 * @param {string} timestamp - timestamp of the response
 */
const BaseResponseSchema: Schema = z.object({
  message: z.string(),
  timestamp: z.string(),
});
type BaseResponse = z.infer<typeof BaseResponseSchema>;

/**
 * @type Example Person
 * @param {string} name - name of the user
 * @param {number} age - age of the user
 */
const PersonSchema: Schema = z.object({
  name: z.string(),
  age: z.number().int().positive(),
});
type Person = z.infer<typeof PersonSchema>;

/**
 * @type Example PersonDescription
 * @param {string} description - description of the person
 */
const PersonDescriptionSchema: Schema = z.object({
  description: z.string(),
});
type PersonDescription = z.infer<typeof PersonDescriptionSchema>;

export {
  BaseResponse,
  BaseResponseSchema,
  Person,
  PersonSchema,
  PersonDescription,
  PersonDescriptionSchema,
};
