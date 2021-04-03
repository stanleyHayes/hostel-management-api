import express from "express";
const router = express.Router({mergeParams: true});


import {createRoom, deleteRoom, getRoom, getRooms, updateRoom} from "../controllers/rooms.js";

router.route('/')
    .post(createRoom)
    .get(getRooms);

router.route('/:id')
    .get(getRoom)
    .put(updateRoom)
    .delete(deleteRoom);

export default router;
