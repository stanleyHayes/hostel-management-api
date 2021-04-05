import express from "express";
const router = express.Router({mergeParams: true});

import {createRoom, deleteRoom, getRoom, getRooms, updateRoom} from "../controllers/rooms.js";
import {auth, authorize} from "../middleware/authentication.js";
import complaintRoutes from "./complaints";

//get all complaints of a particular room
//api/v1/rooms/:roomID/complaints
router.use('/:roomID/complaints', complaintRoutes);

router.route('/')
    .post(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), createRoom)
    .get(getRooms);

router.route('/:id')
    .get(getRoom)
    .put(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), updateRoom)
    .delete(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), deleteRoom);

export default router;
