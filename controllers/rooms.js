import Room from "../models/room.js";

export const createRoom = async (req, res) => {
    try {
        req.body.creator = req.user;
        const {name, block, bedCount, hostel, facilities, creator} = req.body;
        const room = await Room.create({name, block, bedCount, hostel, facilities, creator});
        res.status(201).json({message: 'Successfully created a room!!!', data: room});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const getRooms = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.size) || 10;
        const skip = (page - 1) * limit;
        const match = {};
        if(req.params.hostelID){
            match["hostel"] = req.params.hostelID;
        }
        const rooms = await Room.find(match).limit(limit).skip(skip);
        res.status(200).json({message: `Successfully retrieved ${rooms.length} rooms`, data: rooms});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const getRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if(!room){
            return res.status(404).json({message: `Room with id ${req.params.id} not found`, data: null});
        }
        res.status(200).json({message: 'Successfully created a room!!!', data: room});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const updateRoom = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['gallery', 'image', 'bedCount', 'block', 'name'];
        const isAllowed = updates.every(update => allowedUpdates.includes(update));
        if(!isAllowed){
            return res.status(400).json({message: `Room update not allowed`, data: null});

        }
        const room = await Room.findById(req.params.id);
        if(!room){
            return res.status(404).json({message: `Room with id ${req.params.id} not found`, data: null});
        }
        for(let key of updates){
            room[key] = req.body[key];
        }
        await room.save();
        res.status(200).json({message: 'Successfully created a room!!!', data: room});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}

export const deleteRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if(!room){
            return res.status(404).json({message: `Room with id ${req.params.id} not found`, data: null});
        }
        room.status = 'DELETED';
        await room.save();
        res.status(200).json({message: `Successfully deleted room with id ${req.params.id} !!!`, data: room});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}