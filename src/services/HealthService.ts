/**
 * @file @/services/HealthService.ts
 * @description Service for health operations.
 */
import { z } from 'zod';

import { MethodNotImplementedError } from '@/models/serverErrors';

enum HealthStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
}

const DatabaseStatusSchema = z.object({
  name: z.string(),
  status: z.nativeEnum(HealthStatus),
  connectionDetails: z
    .object({
      host: z.string(),
      port: z.number().int().positive(),
    })
    .optional(),
  message: z.string().optional(),
});
type DatabaseStatus = z.infer<typeof DatabaseStatusSchema>;

const APIStatusSchema = z.object({
  name: z.string(),
  status: z.nativeEnum(HealthStatus),
  url: z.string(),
  message: z.string().optional(),
  version: z.string().optional(),
});
type APIStatus = z.infer<typeof APIStatusSchema>;

/**
 * Gets the API version.
 * @returns {string} - API version
 */
function getAPIVersion(): string {
  const packageJson = require('@/../package.json');
  return packageJson.version;
}

/**
 * Gets the current timestamp.
 * @returns {string} - current timestamp
 */
function getCurrentTimestamp(): string {
  return new Date().toISOString();
}

/**
 * Gets the status of the databases.
 * @returns {DatabaseStatus[]} - status of the databases
 */
function getDatabasesStatus(): DatabaseStatus[] {
  throw new MethodNotImplementedError('getDatabasesStatus');
}

/**
 * Gets the status of the API.
 * @returns {APIStatus[]} - status of the API
 */
function getAPIStatuses(): APIStatus[] {
  throw new MethodNotImplementedError('getAPIStatuses');
}

export {
  APIStatus,
  APIStatusSchema,
  DatabaseStatus,
  DatabaseStatusSchema,
  getAPIVersion,
  getAPIStatuses,
  getCurrentTimestamp,
  getDatabasesStatus,
};
