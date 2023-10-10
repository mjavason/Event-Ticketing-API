import { Router } from 'express';
const router = Router();
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { eventController } from '../../../controllers';
import { eventValidation } from '../../../validation';

router.get('/search', processRequestQuery(eventValidation.find.query), eventController.find);

router.get('/count', processRequestQuery(eventValidation.find.query), eventController.getCount);

router.get('/', eventController.getAll);

router.get('/:pagination', eventController.getAll);

router.post('/', processRequestBody(eventValidation.create.body), eventController.create);

router.patch('/:id', processRequestBody(eventValidation.update.body), eventController.update);

router.delete('/:id', processRequestParams(eventValidation.delete.params), eventController.delete);

export default router;
