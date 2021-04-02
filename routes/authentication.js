import express from "express";

const router = express.Router({mergeParams: true});
import {register, updateProfile, deleteProfile, getMe, login, verifyUser, forgotPassword} from "../controllers/authentication.js";

router.post('/register', register);
router.post('/login', login);
router.get('/me', getMe);
router.put('/me', updateProfile);
router.delete('/me', deleteProfile);
router.post('/:token/verify', verifyUser);
router.post('/me/forgot-password', forgotPassword);

export default router;