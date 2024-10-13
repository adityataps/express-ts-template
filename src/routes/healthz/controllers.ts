/**
 * @file @/routes/healthz/controllers.ts
 * @description Controllers for the healthz route.
 */
import { getAPIVersion } from '@/services/HealthService';

import { HealthzResponse } from './schemas';

/**
 * Controller for GET /healthz.
 * @returns {HealthzResponse} - output of the healthz route
 * @todo Implement actual health check with databases and APIs
 */
function getHealthz(): HealthzResponse {
  return {
    name: 'Express API',
    version: getAPIVersion(),
    status: 'ok',
  };
}

export { getHealthz };
