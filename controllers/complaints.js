import Complaint from "../models/complaint.js";

export const createComplaint = async (req, res) => {
    try {

        req.body.user = req.user;
        const {text, user, hostel, rating, room, title} = req.body;
        const complaint = await Complaint.create({text, user, hostel, rating, room, title});
        res.status(201).json({data: complaint, message: `Successfully created a complaint`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getComplaints = async (req, res) => {
    try {
        const match = {};
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.size) || 10;
        const skip = (page - 1) * limit;
        if(req.params.hostelID){
            match["hostel"] = req.params.hostelID;
        }
        if(req.params.roomID){
            match["room"] = req.params.roomID;
        }
        const complaints = await Complaint.find(match).skip(skip).limit(limit);
        res.status(200).json({data: complaints, message: `Successfully retrieved ${complaints.length} complaints`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getComplaint = async (req, res) => {
    try {
        let complaint = await Complaint.findById(req.params.id);
        if(!complaint){
            return res.status(404).json({data: null, message: 'Review not found'});
        }
        res.status(200).json({data: complaint, message: `Successfully retrieved a complaint`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const updateComplaint = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['text', 'title', 'status', 'room', 'hostel'];
        const isAllowed = updates.every(update => allowedUpdates.includes(update));
        if(!isAllowed){
            return res.status(400).json({data: null, message: `Updates not allowed`});
        }
        const complaint = await Complaint.findById(req.params.id);
        for(let key of updates){
            complaint[key] = req.body[key];
        }
        await complaint.save();
        res.status(200).json({data: complaint, message: `Successfully created a complaint`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}



export const deleteComplaint = async (req, res) => {
    try {
        let complaint = await Complaint.findById(req.params.id);
        if(!complaint){
            return res.status(404).json({data: null, message: 'Hostel not found'});
        }
        complaint.status = 'DELETED';
        await complaint.save();
        res.status(200).json({data: complaint, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}