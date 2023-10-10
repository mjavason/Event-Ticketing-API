import { Router } from 'express';
const router = Router();
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { ticketController } from '../../../controllers';
import { ticketValidation } from '../../../validation';

router.get('/search', processRequestQuery(ticketValidation.find.query), ticketController.find);

router.get('/count', processRequestQuery(ticketValidation.find.query), ticketController.getCount);

router.get('/exists', processRequestQuery(ticketValidation.find.query), ticketController.exists);

router.get('/', ticketController.getAll);

router.get('/:pagination', ticketController.getAll);

router.post('/', processRequestBody(ticketValidation.create.body), ticketController.create);

router.patch('/:id', processRequestBody(ticketValidation.update.body), ticketController.update);

router.delete('/:id', processRequestParams(ticketValidation.delete.params), ticketController.delete);

export default router;
