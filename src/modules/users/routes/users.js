import express from 'express';
import {
  registerUser,
  getUserById,
  updateUser,
  deleteUser,
  listUsers,
} from '../controllers/user.js';
import validator from '../validators/index.js';
const router = express.Router();
router.post('/register', validator.registerUser, registerUser);
router.get('/filter', listUsers);
router.get('/:id', getUserById);
router.put('/:id', validator.updateUser, updateUser);
router.delete('/:id', deleteUser);

export default  router;