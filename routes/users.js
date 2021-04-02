import express from "express";

const router = express.Router({mergeParams: true});
import {deleteUser, updateUser, createUser, getUser, getUsers} from "../controllers/users.js";

router.route('/')
    .post(createUser)
    .get(getUsers);


router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

export default router;