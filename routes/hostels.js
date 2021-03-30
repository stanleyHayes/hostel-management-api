import express from "express";

const router = express.Router({mergeParams: true});
import {createHostel, getHostels, deleteHostel, getHostel, updateHostel} from "../controllers/hostels.js";

router.route('/')
    .post(createHostel)
    .get(getHostels);


router.route('/:id')
    .get(getHostel)
    .put(updateHostel)
    .delete(deleteHostel);

export default router;