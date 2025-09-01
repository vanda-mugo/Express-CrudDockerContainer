import express from 'express';
import { getAllUsers, createUser,getUserById, updateUser, deleteUser } from '../controller/userController.js';
const router = express.Router();

router.get('/user', getAllUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);



export default router;
