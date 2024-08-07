import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletepost, getposts, updatepost } from '../controllers/post.controller.js';

const router = express.Router();

router.post('https://blogzihad.vercel.app/create', verifyToken, create)
router.get('https://blogzihad.vercel.app/getposts', getposts)
router.delete('https://blogzihad.vercel.app/deletepost/:postId/:userId', verifyToken, deletepost)
router.put('https://blogzihad.vercel.app/updatepost/:postId/:userId', verifyToken, updatepost)


export default router;