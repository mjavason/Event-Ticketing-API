import express from 'express';
const router = express.Router();
import eventRouter from './event.route';
import ticketRouter from './ticket.route';
import isAuth from '../../../middleware/is_auth.middleware';

router.use(isAuth);
router.use('/event', eventRouter);
router.use('/router', ticketRouter);
router.use('/ticket', ticketRouter);
export default router;
