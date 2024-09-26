/**
 * @file @/routes/index/controllers.ts
 * @description Boilerplate controllers for "/" route.
 */
import { GetIndexResponse, PostIndexRequestBody, PostIndexResponseBody } from './schemas';
import { getNameAndAgeString } from './utils';

/**
 * Controller for GET /.
 * @returns {GetIndexResponse} - output of the index page
 */
function getIndex(): GetIndexResponse {
  return {
    message: 'Hello World',
    status: 'success',
    timestamp: new Date().toISOString(),
  };
}

/**
 * Controller for POST /.
 * @param {PostIndexRequestBody} body - the body of the request
 * @returns {PostIndexResponseBody} - the response body
 */
function postIndex(body: PostIndexRequestBody): PostIndexResponseBody {
  return {
    message: getNameAndAgeString(body.name, body.age),
  };
}

export { getIndex, postIndex };
