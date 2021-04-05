import express from "express";

const router = express.Router({mergeParams: true});

import {
    createRoomOccupation,
    deleteRoomOccupation,
    getRoomOccupation,
    getRoomOccupations,
    updateRoomOccupation
} from "../controllers/room-occupations.js";
import {auth, authorize} from "../middleware/authentication.js";

router.route('/')
    .post(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), createRoomOccupation)
    .get(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), getRoomOccupations);

router.route('/:id')
    .get(auth, getRoomOccupation)
    .put(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), updateRoomOccupation)
    .delete(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), deleteRoomOccupation);

export default router;
