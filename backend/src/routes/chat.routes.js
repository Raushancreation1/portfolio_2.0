import { Router } from 'express';
import { body } from 'express-validator';
import { chat } from '../controllers/chat.controller.js';
import { handleValidation } from '../utils/validate.js';

const router = Router();

router.post(
  '/',
  [body('message').isString().trim().isLength({ min: 1, max: 1000 }).withMessage('message is required')],
  handleValidation,
  chat
);

export default router;
