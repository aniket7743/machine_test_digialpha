import express from 'express';
import {
  registerUser,
  getUserById,
  updateUser,
  deleteUser,
  listUsers,
} from '../controllers/user.js';

const router = express.Router();

router.post('/register', registerUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/', listUsers);

export default  router;