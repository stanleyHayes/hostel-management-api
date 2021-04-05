import express from "express";

const router = express.Router({mergeParams: true});

import {createReview, deleteReview, getReview, getReviews, updateReview} from "../controllers/reviews.js";
import {auth} from "../middleware/authentication.js";

router.route('/')
    .post(auth, createReview)
    .get(auth, getReviews);

router.route('/:id')
    .get(auth, getReview)
    .put(auth, updateReview)
    .delete(auth, deleteReview);

export default router;
