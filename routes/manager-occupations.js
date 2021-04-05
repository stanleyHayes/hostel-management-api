import express from "express";

const router = express.Router({mergeParams: true});

import {
    createManagerOccupation,
    deleteManagerOccupation,
    getManagerOccupation,
    getManagerOccupations,
    updateManagerOccupation
} from "../controllers/manager-occupations.js";
import {auth, authorize} from "../middleware/authentication.js";

router.route('/')
    .post(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), createManagerOccupation)
    .get(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), getManagerOccupations);

router.route('/:id')
    .get(auth, getManagerOccupation)
    .put(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), updateManagerOccupation)
    .delete(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), deleteManagerOccupation);

export default router;
