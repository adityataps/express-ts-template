/**
 * @file @/routes/index/routes.ts
 * @description Boilerplate endpoints for "/" route.
 */
import { Request, Response, Router } from 'express';

import { validateBody } from '@/middlewares/inputValidation';

import { getIndex, postIndex } from './controllers';
import {
  GetIndexResponse,
  PostIndexRequestBody,
  PostIndexRequestBodySchema,
  PostIndexResponseBody,
} from './schemas';

const indexRouter = Router();

/**
 * @route GET /
 * @description GET method for index route.
 * @returns {Record<string, any>} - boilerplate output
 */
indexRouter.get('/', (req: Request, res: Response<GetIndexResponse>) => {
  const controllerOutput = getIndex();
  res.json(controllerOutput);
});

/**
 * @route POST /
 * @description POST method for index route.
 * @returns {Record<string, any>} - boilerplate output
 */
indexRouter.post(
  '/',
  validateBody(PostIndexRequestBodySchema),
  (req: Request<{}, {}, PostIndexRequestBody>, res: Response<PostIndexResponseBody>) => {
    const controllerOutput = postIndex(req.body);
    console.log(controllerOutput);
    res.json(controllerOutput);
  },
);

export default indexRouter;
