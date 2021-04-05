import express from "express";

const router = express.Router({mergeParams: true});
import {createHostel, getHostels, deleteHostel, getHostel, updateHostel} from "../controllers/hostels.js";
import {auth, authorize} from "../middleware/authentication.js";
import roomRoutes from "./rooms";


router.use('/rooms', roomRoutes);

router.route('/')
    .post(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), createHostel)
    .get(getHostels);


router.route('/:id')
    .get(getHostel)
    .put(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), updateHostel)
    .delete(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), deleteHostel);

export default router;