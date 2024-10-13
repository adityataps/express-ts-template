/**
 * @file @/services/HealthService.ts
 * @description Service for health operations.
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

export { getAPIVersion, getCurrentTimestamp };
