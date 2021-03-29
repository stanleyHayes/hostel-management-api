import mongoose from "mongoose";

const Schema = mongoose.Schema;

const complaintSchema = new Schema({
    complaint: {
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
    room: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Room"
    },
    title: {
        type: String,
        required: true
    }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

export default Complaint;