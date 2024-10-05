/**
 * @file @/routes/index/controllers.ts
 * @description Boilerplate controllers for "/" route.
 */
import { BaseResponse, Person, PersonDescription } from './schemas';
import { getNameAndAgeString } from './utils';

/**
 * Controller for GET /.
 * @returns {BaseResponse} - output of the index page
 */
function getIndex(): BaseResponse {
  return {
    message: 'Hello World',
    timestamp: new Date().toISOString(),
  };
}

/**
 * Controller for POST /.
 * @param {Person} body - the body of the request
 * @returns {PersonDescription} - the response body
 */
function postIndex(body: Person): PersonDescription {
  return {
    description: getNameAndAgeString(body.name, body.age),
  };
}

export { getIndex, postIndex };
