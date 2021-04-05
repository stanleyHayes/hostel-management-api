import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    hostel: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Hostel"
    },
    rating: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['APPROVED', 'BLOCKED', 'DELETED',],
        default: 'APPROVED'
    }
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;