import Review from "../models/review.js";

export const createReview = async (req, res) => {
    try {
        req.body.user = req.user;
        const {text, user, hostel, rating} = req.body;
        const review = await Review.create({text, user, hostel, rating});
        res.status(201).json({data: review, message: `Successfully created a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getReviews = async (req, res) => {
    try {
        const match = {};
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.size) || 10;
        const skip = (page - 1) * limit;
        if(req.params.hostelID){
            match["hostel"] = req.params.hostelID;
        }
        const reviews = await Review.find(match).skip(skip).limit(limit);
        res.status(200).json({data: reviews, message: `Successfully retrieved ${reviews.length} reviews`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const getReview = async (req, res) => {
    try {
        let review = await Review.findById(req.params.id);
        if(!review){
            return res.status(404).json({data: null, message: 'Review not found'});
        }
        res.status(200).json({data: review, message: `Successfully retrieved review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}


export const updateReview = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['text', 'rating', 'status'];
        const isAllowed = updates.every(update => allowedUpdates.includes(update));
        if(!isAllowed){
            return res.status(400).json({data: null, message: `Updates not allowed`});
        }
        const review = await Review.findById(req.params.id);
        for(let key of updates){
            review[key] = req.body[key];
        }
        await review.save();
        res.status(200).json({data: review, message: `Successfully updated a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}



export const deleteReview = async (req, res) => {
    try {
        let review = await Review.findById(req.params.id);
        if(!review){
            return res.status(404).json({data: null, message: 'Review not found'});
        }
        review.status = 'DELETED';
        await review.save();
        res.status(200).json({data: review, message: `Successfully deleted a review`});
    }catch (e) {
        res.status(500).json({message: e.message});
    }
}