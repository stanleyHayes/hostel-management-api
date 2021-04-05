import express from "express";

const router = express.Router({mergeParams: true});

import {
    createComplaint,
    deleteComplaint,
    getComplaint,
    getComplaints,
    updateComplaint
} from "../controllers/complaints.js";
import {auth} from "../middleware/authentication.js";

router.route('/')
    .post(auth, createComplaint)
    .get(auth, getComplaints);

router.route('/:id')
    .get(auth, getComplaint)
    .put(auth, updateComplaint)
    .delete(auth, deleteComplaint);

export default router;
