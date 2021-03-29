import mongoose from "mongoose";
const Schema = mongoose.Schema;

const roomOccupationSchema = new Schema({
    room: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Room"
    },
    hostel: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Hostel"
    },
    duration: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['OCCUPIED', 'ABANDONED', 'ENDED']
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}});

const RoomOccupation = mongoose.model("RoomOccupation", roomOccupationSchema);

export default RoomOccupation;