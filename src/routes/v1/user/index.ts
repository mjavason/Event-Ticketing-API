import express from 'express';
const router = express.Router();
import eventRouter from './event.route';
import isAuth from '../../../middleware/is_auth.middleware';

router.use(isAuth);
router.use('/event', eventRouter);

export default router;
