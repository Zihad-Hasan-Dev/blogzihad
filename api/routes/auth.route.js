import express from 'express';
import { google, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();


router.post('https://blogzihad.vercel.app/signup', signup);
router.post('https://blogzihad.vercel.app/signin', signin);
router.post('https://blogzihad.vercel.app/google', google)

export default router;