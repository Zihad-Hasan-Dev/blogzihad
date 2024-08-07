import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createComment,
  deleteComment,
  editComment,
  getPostComments,
  getcomments,
  likeComment,
} from '../controllers/comment.controller.js';

const router = express.Router();

router.post('https://blogzihad.vercel.app/create', verifyToken, createComment);
router.get('https://blogzihad.vercel.app/getPostComments/:postId', getPostComments);
router.put('https://blogzihad.vercel.app/likeComment/:commentId', verifyToken, likeComment);
router.put('https://blogzihad.vercel.app/editComment/:commentId', verifyToken, editComment);
router.delete('/https://blogzihad.vercel.appdeleteComment/:commentId', verifyToken, deleteComment);
router.get('https://blogzihad.vercel.app/getcomments', verifyToken, getcomments);

export default router;
