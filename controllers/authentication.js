import User from "../models/user.js";

export const register = async (req, res) => {
    try {
        const {name, occupation, dob, email, phone, password} = req.body;
        let user = await User.findOne({email});
        if (user) {
            return res.status(409).json({data: null, message: `Account with email ${email} already exist`});
        }
        user = await User.create({name, occupation, dob, email, phone, password});
        const token = await user.generateToken();
        res.status(201).json({data: user, message: `Account successfully created`, token});
        res.status(201).json({message: `Account created successfully`});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!(email && password)){
            return res.status(400).json({data: null, message: `Email or password missing`});
        }
        const user = await User.findOne({email});
        if (!user) {
            return res.status(401).json({data: null, message: `Authentication failed`});
        }
        if(!await user.matchPassword(password)){
            return res.status(401).json({data: null, message: `Authentication failed`});
        }
        const token = await user.generateToken();
        res.status(200).json({data: user, message: `Login successful`, token});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const updateProfile = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['name', 'phone', 'image', 'password', 'occupation', 'dob'];
        const isAllowed = updates.every(update => allowedUpdates.includes(update));
        if(!isAllowed){
            return res.status(400).json({data: null, message: `Updates not allowed`});
        }
        for(let key of updates){
            req.user[key] = req.body[key];
        }
        await req.user.save();
        res.status(200).json({message: `Account created successfully`, data: req.user});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getMe = async (req, res) => {
    try {
        res.status(200).json({message: `Account retrieved`, data: req.user, token: req.token});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const deleteProfile = async (req, res) => {
    try {
        res.status(200).json({message: `Account created successfully`});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const verifyUser = async (req, res) => {
    try {
        res.status(200).json({message: `Account created successfully`});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const forgotPassword = async (req, res) => {
    try {
        res.status(200).json({message: `Account created successfully`});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}