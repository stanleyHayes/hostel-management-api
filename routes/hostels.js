import express from "express";

const router = express.Router({mergeParams: true});
import {createHostel, getHostels, deleteHostel, getHostel, updateHostel} from "../controllers/hostels.js";
import {auth, authorize} from "../middleware/authentication.js";
import roomRoutes from "./rooms";
import complaintRoutes from "./complaints";
import reviewRoutes from "./reviews";

//get all complaints of a particular hostel
//api/v1/hostels/hostelID/complaints
router.use('/:hostelID/complaints', complaintRoutes);

//get all rooms of a particular hostel
//api/v1/hostels/hostelID/rooms
router.use('/:hostelID/rooms', roomRoutes);

//get all reviews of a particular hostel
//api/v1/hostels/hostelID/reviews
router.use('/:hostelID/reviews', reviewRoutes);

router.route('/')
    .post(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), createHostel)
    .get(getHostels);


router.route('/:id')
    .get(getHostel)
    .put(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), updateHostel)
    .delete(auth, authorize('SUPER_ADMIN', 'ADMIN', 'MANAGER'), deleteHostel);

export default router;