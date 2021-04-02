import User from "../models/user.js";

export const createUser = async (req, res) => {
    try {
        const {name, phone, password, email, occupation, dob, role} = req.body;
        let user = await User.findOne({email});
        if(user){
            return res.status(409).json({data: null, message: `Account with email ${email} already exists`});
        }
        user = await User.create({name, phone, password, email, occupation, dob, role});
        res.status(201).json({data: user, message: `Account with email ${email} created`});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getUsers = async (req, res) => {
    try {
        const match = {};
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.size) || 10;
        const skip = (page - 1) * limit;

        const users = await User.find(match).skip(skip).limit(limit);
        res.status(200).json({data: users, message: `Retrieved ${users.length} users`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({data: user, message: `User with id ${req.params.id} not found`});
        }
        res.status(200).json({message: `Retrieved user with email ${user.email}`, data: user});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const updateUser = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['name', 'image', 'role', 'phone', 'password', 'dob', 'occupation', 'status'];
        const isAllowed = updates.every(update => allowedUpdates.includes(update));
        if(!isAllowed){
            return res.status(400).json({message: `Updates not allowed`, data: null});
        }
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({data: user, message: `User with id ${req.params.id} not found`});
        }
        for(let key of updates){
            user[key] = req.body[key];
        }
        await user.save();
        res.status(200).json({data: user, message: `User with email ${user.email} successfully updated!`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({data: user, message: `User with id ${req.params.id} not found`});
        }
        user.status = 'DELETED';
        await user.save();
        res.status(200).json({message: `Retrieved user with email ${user.email}`, data: user});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}