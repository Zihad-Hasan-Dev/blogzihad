import express from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
  signout,
  test,
  updateUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('https://blogzihad.vercel.app/test', test);
router.put('https://blogzihad.vercel.app/update/:userId', verifyToken, updateUser);
router.delete('https://blogzihad.vercel.app/delete/:userId', verifyToken, deleteUser);
router.post('https://blogzihad.vercel.app/signout', signout);
router.get('https://blogzihad.vercel.app/getusers', verifyToken, getUsers);
router.get('https://blogzihad.vercel.app/:userId', getUser);

export default router;
