/**
 * @file @/routes/index/routes.ts
 * @description Boilerplate endpoints for "/" route.
 */
import { Request, Response, Router } from 'express';

import { validateBody } from '@/middlewares/inputValidation';

import { getIndex, postIndex } from './controllers';
import { BaseResponse, Person, PersonDescription, PersonSchema } from './schemas';

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
 * @returns {Record<PersonDescription>} - boilerplate output
 */
indexRouter.post(
  '/',
  validateBody(PersonSchema),
  (req: Request<{}, {}, Person>, res: Response<PersonDescription>) => {
    const controllerOutput = postIndex(req.body);
    console.log(controllerOutput);
    res.json(controllerOutput);
  },
);

export default indexRouter;
