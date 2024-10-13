/**
 * @file @/routes/index/routes.ts
 * @description Boilerplate endpoints for "/" route.
 */
import { Request, Response, Router } from 'express';

import { validateBody } from '@/middlewares/inputValidation';

import { getIndex, postIndex } from './controllers';
import { BaseResponse, PersonRequest, PersonRequestSchema, PersonResponse } from './schemas';

const indexRouter = Router();

/**
 * @route GET /
 * @description GET method for index route.
 * @returns {Record<BaseResponse>} - boilerplate output
 */
indexRouter.get('/', (req: Request, res: Response<BaseResponse>) => {
  const controllerOutput = getIndex();
  res.json(controllerOutput);
});

/**
 * @route POST /
 * @description POST method for index route.
 * @returns {Record<PersonResponse>} - boilerplate output
 */
indexRouter.post(
  '/',
  validateBody(PersonRequestSchema),
  (req: Request<{}, {}, PersonRequest>, res: Response<PersonResponse>) => {
    const controllerOutput = postIndex(req.body);
    console.log(controllerOutput);
    res.json(controllerOutput);
  },
);

export default indexRouter;
