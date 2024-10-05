/**
 * @file @/routes/healthz/schemas.ts
 * @description Schemas for the healthz route.
 */
import { Schema, z } from 'zod';

enum HealthzStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
}

/**
 * @type Example HealthzResponse
 * @param {string} status - status of the healthz route
 */
const HealthzResponseSchema: Schema = z
  .object({
    name: z.string(),
    version: z.string(),
    status: z.nativeEnum(HealthzStatus),
    dbStatus: z.array(
      z.object({
        name: z.string(),
        connectionDetails: z.object({
          host: z.string(),
          port: z.number().int().positive(),
        }),
        status: z.nativeEnum(HealthzStatus),
        message: z.string(),
      }),
    ),
    apiStatus: z.array(
      z.object({
        name: z.string(),
        version: z.string(),
        url: z.string(),
        status: z.nativeEnum(HealthzStatus),
        message: z.string(),
      }),
    ),
  })
  .required({
    status: true,
  });
type HealthzResponse = z.infer<typeof HealthzResponseSchema>;

export { HealthzResponse, HealthzResponseSchema, HealthzStatus };
