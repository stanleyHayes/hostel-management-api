import mongoose from "mongoose";

const Schema = mongoose.Schema;

const complaintSchema = new Schema({
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
    room: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Room"
    },
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['RESOLVED', 'UNRESOLVED', 'DELETED'],
        default: 'UNRESOLVED'
    }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

export default Complaint;