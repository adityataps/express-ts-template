/**
 * @file @/routes/healthz/utils.ts
 * @description Utils for the healthz route.
 */

function getAPIVersion(): string {
  const packageJson = require('@/../package.json');
  return packageJson.version;
}

export { getAPIVersion };
