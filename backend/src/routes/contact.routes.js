import { Router } from 'express';
import { body } from 'express-validator';
import { submitContact } from '../controllers/contact.controller.js';
import { handleValidation } from '../utils/validate.js';

const router = Router();

router.post(
  '/',
  [
    body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Message must be 10-2000 chars'),
  ],
  handleValidation,
  submitContact
);

export default router;
